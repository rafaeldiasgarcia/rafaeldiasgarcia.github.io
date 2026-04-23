import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const artigosDir = path.join(rootDir, 'artigos');
const partialsDir = path.join(rootDir, 'site-src', 'partials');
const postsJsonPath = path.join(artigosDir, 'posts.json');
const rssFeedPath = path.join(rootDir, 'rss.xml');
const siteUrl = 'https://rafaeldiasgarcia.github.io';

function toPosix(filePath) {
    return filePath.split(path.sep).join('/');
}

function stripBom(text) {
    return text.replace(/^\uFEFF/, '');
}

function parseFrontmatter(rawContent) {
    const normalized = stripBom(rawContent);
    const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

    if (!match) {
        return { data: {}, body: normalized };
    }

    const data = {};

    for (const line of match[1].split(/\r?\n/)) {
        const separatorIndex = line.indexOf(':');

        if (separatorIndex === -1) {
            continue;
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();

        if (!key) {
            continue;
        }

        data[key] = value.replace(/^['"]|['"]$/g, '');
    }

    return {
        data,
        body: normalized.slice(match[0].length),
    };
}

function cleanInlineMarkdown(text) {
    return text
        .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
        .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
        .replace(/[*_~`>#-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function stripMarkdown(markdown) {
    return markdown
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
        .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/^\s*[-*+]\s+/gm, '')
        .replace(/^\s*\d+\.\s+/gm, '')
        .replace(/^\s*>\s?/gm, '')
        .replace(/^\s*---+\s*$/gm, ' ')
        .replace(/\r/g, '')
        .replace(/\t/g, ' ')
        .replace(/[ *_~]/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ ]{2,}/g, ' ')
        .trim();
}

function extractTitle(markdownBody, slug) {
    const headingMatch = markdownBody.match(/^#\s+(.+)$/m);

    if (headingMatch) {
        return cleanInlineMarkdown(headingMatch[1]);
    }

    return slug
        .split('-')
        .filter(Boolean)
        .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
        .join(' ');
}

function extractExcerpt(markdownBody, fallbackTitle) {
    const plainText = stripMarkdown(markdownBody);
    const paragraphs = plainText
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

    const paragraph =
        paragraphs.find((item) => item.length > 80 && item !== fallbackTitle) ||
        paragraphs.find((item) => item !== fallbackTitle) ||
        plainText;

    const normalized = paragraph.replace(/\s+/g, ' ').trim();

    if (normalized.length <= 190) {
        return normalized;
    }

    return `${normalized.slice(0, 187).trimEnd()}...`;
}

function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeXml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

async function collectMarkdownPosts(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            files.push(...(await collectMarkdownPosts(fullPath)));
            continue;
        }

        if (entry.isFile() && entry.name === 'index.md') {
            const relative = path.relative(artigosDir, fullPath);
            const segments = relative.split(path.sep);

            if (segments.length === 5) {
                files.push(fullPath);
            }
        }
    }

    return files;
}

async function readLegacyPosts() {
    try {
        const content = await readFile(postsJsonPath, 'utf8');
        const posts = JSON.parse(stripBom(content));
        return new Map(posts.map((post) => [post.id, post]));
    } catch {
        return new Map();
    }
}

async function buildPosts() {
    const legacyPosts = await readLegacyPosts();
    const markdownFiles = await collectMarkdownPosts(artigosDir);

    const posts = [];

    for (const filePath of markdownFiles) {
        const rawContent = await readFile(filePath, 'utf8');
        const { data, body } = parseFrontmatter(rawContent);
        const relativeFile = path.relative(artigosDir, filePath);
        const [year, month, day, slug] = relativeFile.split(path.sep);
        const fallbackDate = `${year}-${month}-${day}`;
        const legacyPost = legacyPosts.get(data.id || slug) || legacyPosts.get(slug);
        const id = data.id || legacyPost?.id || slug;
        const title = data.title || legacyPost?.title || extractTitle(body, slug);
        const excerpt = data.excerpt || legacyPost?.excerpt || extractExcerpt(body, title);
        const date = data.date || legacyPost?.date || fallbackDate;

        posts.push({
            id,
            title,
            date,
            excerpt,
            file: toPosix(relativeFile),
        });
    }

    posts.sort((left, right) => right.date.localeCompare(left.date));

    await writeFile(postsJsonPath, `${JSON.stringify(posts, null, 4)}\n`, 'utf8');

    return posts;
}

function formatDateForCard(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
}

function toRssDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
    return date.toUTCString();
}

async function buildRssFeed(posts) {
    const items = posts
        .map((post) => {
            const postUrl = `${siteUrl}/artigos/post.html?id=${encodeURIComponent(post.id)}`;

            return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(postUrl)}</link>
      <guid>${escapeXml(postUrl)}</guid>
      <pubDate>${escapeXml(toRssDate(post.date))}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`.trim();
        })
        .join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rafael Dias Garcia</title>
    <link>${siteUrl}</link>
    <description>Artigos sobre estudos, projetos e aprendizados da minha jornada em software.</description>
    <language>pt-BR</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

    await writeFile(rssFeedPath, rss, 'utf8');
}

function renderLatestPosts(posts) {
    const latestPosts = posts.slice(0, 3);

    if (latestPosts.length === 0) {
        return `
<section id="ultimos-posts" class="py-5 bg-white">
    <div class="container">
        <div class="text-center latest-posts-header mx-auto">
            <h2 class="fw-bold mb-3" data-i18n="blog.latestTitle">Últimos Artigos</h2>
            <p class="text-muted mb-0" data-i18n="blog.latestSubtitle">Os artigos mais recentes sobre estudos, projetos e aprendizados da minha jornada em software.</p>
        </div>
    </div>
</section>`.trim();
    }

    const cards = latestPosts
        .map((post) => {
            const safeId = encodeURIComponent(post.id);

            return `
                <div class="col-md-6 col-lg-4 latest-post-item">
                    <article class="custom-card latest-post-card p-4 d-flex flex-column">
                        <span class="latest-post-date">${escapeHtml(formatDateForCard(post.date))}</span>
                        <h4 class="fw-bold mt-3 mb-3 latest-post-title">${escapeHtml(post.title)}</h4>
                        <p class="text-muted small flex-grow-1 mb-4">${escapeHtml(post.excerpt)}</p>
                        <a href="artigos/post.html?id=${safeId}" class="btn btn-outline-primary rounded-pill align-self-start" data-i18n="blog.readPost">Ler artigo</a>
                    </article>
                </div>`.trim();
        })
        .join('\n');

    const shouldUseMobileDrawer = latestPosts.length > 1;
    const cardsMarkup = shouldUseMobileDrawer
        ? `
        <div class="latest-posts-expandable-wrapper" id="latestPostsWrapper">
            <div class="row g-4">
${cards}
            </div>
        </div>
        <div class="text-center mt-4">
            <button id="showMoreLatestPostsBtn" class="btn btn-outline-primary rounded-pill px-5" type="button">
                <span data-i18n="blog.showMore">Ver Mais Artigos</span>
                <i class="fas fa-chevron-down ms-2"></i>
            </button>
        </div>`
        : `
        <div class="row g-4">
${cards}
        </div>`;

    return `
<section id="ultimos-posts" class="py-5 bg-white">
    <div class="container">
        <div class="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-5">
            <div class="latest-posts-header">
                <h2 class="fw-bold mb-3" data-i18n="blog.latestTitle">Últimos Artigos</h2>
                <p class="text-muted mb-0" data-i18n="blog.latestSubtitle">Os artigos mais recentes sobre estudos, projetos e aprendizados da minha jornada em software.</p>
            </div>
            <a href="artigos/index.html" class="btn btn-outline-primary rounded-pill px-4 align-self-lg-center" data-i18n="blog.viewAll">Ver todos os artigos</a>
        </div>
${cardsMarkup}
    </div>
</section>`.trim();
}

function replaceBuildSection(fileContent, markerName, replacement) {
    const startMarker = `<!-- build:${markerName}:start -->`;
    const endMarker = `<!-- build:${markerName}:end -->`;
    const startIndex = fileContent.indexOf(startMarker);
    const endIndex = fileContent.indexOf(endMarker);

    if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
        throw new Error(`Marcadores de build não encontrados para "${markerName}".`);
    }

    const before = fileContent.slice(0, startIndex + startMarker.length);
    const after = fileContent.slice(endIndex);

    return `${before}\n${replacement.trim()}\n${after}`;
}

async function loadPartial(name) {
    return readFile(path.join(partialsDir, name), 'utf8');
}

async function updateHtmlFiles(posts) {
    const headerHome = await loadPartial('header-home.html');
    const headerBlog = await loadPartial('header-blog.html');
    const footer = await loadPartial('footer.html');
    const contactModal = await loadPartial('contact-modal.html');
    const latestPosts = renderLatestPosts(posts);

    const pages = [
        {
            filePath: path.join(rootDir, 'index.html'),
            replacements: [
                ['header-home', headerHome],
                ['latest-posts', latestPosts],
                ['footer', footer],
                ['contact-modal', contactModal],
            ],
        },
        {
            filePath: path.join(artigosDir, 'index.html'),
            replacements: [
                ['header-blog', headerBlog],
                ['footer', footer],
                ['contact-modal', contactModal],
            ],
        },
        {
            filePath: path.join(artigosDir, 'post.html'),
            replacements: [
                ['header-blog', headerBlog],
                ['footer', footer],
                ['contact-modal', contactModal],
            ],
        },
    ];

    for (const page of pages) {
        let content = await readFile(page.filePath, 'utf8');

        for (const [markerName, replacement] of page.replacements) {
            content = replaceBuildSection(content, markerName, replacement);
        }

        await writeFile(page.filePath, content, 'utf8');
    }
}

async function main() {
    const posts = await buildPosts();
    await buildRssFeed(posts);
    await updateHtmlFiles(posts);

    console.log(`Build concluído com ${posts.length} posts.`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
