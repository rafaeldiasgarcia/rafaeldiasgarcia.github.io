// Language Menu Functionality
class LanguageMenu {
    constructor() {
        this.currentLanguage = 'pt-BR';
        this.languageFlags = {
            'pt-BR': '🇧🇷',
            'en-US': '🇺🇸',
            'es-ES': '🇪🇸',
            'de-DE': '🇩🇪',
            'ja-JP': '🇯🇵'
        };
        this.translations = {
            'pt-BR': {
                'technologies': 'Tecnologias',
                'certifications': 'Certificações',
                'title': 'Engenharia de Software',
                'profile': 'Perfil',
                'profile-text': 'Atualmente, estou no segundo termo da graduação em Engenharia de Software, desenvolvendo minha base em lógica de programação, estrutura de dados e desenvolvimento de sistemas. Sou curioso, gosto de aprender novas tecnologias e estou sempre em busca de desafios que me permitam crescer como desenvolvedor.<br><br>Tenho interesse especial em desenvolvimento backend, arquitetura de software e otimização de código, mas também exploro outras áreas da tecnologia para me tornar um profissional completo. Além disso, tenho um forte apreço por lógica e criatividade, habilidades que também desenvolvi ao estudar violão clássico no Conservatório de Tatuí.',
                'experience': 'Experiência',
                'sge-title': 'SGE - Sistema de Gerenciamento de Eventos',
                'sge-company': 'UNIFIO - Centro Universitário das Faculdades Integradas de Ourinhos - Em Desenvolvimento',
                'sge-description': 'Sistema web completo para gerenciamento de agendamentos de quadras poliesportivas, administração de atléticas universitárias e organização de eventos. Desenvolvido com arquitetura MVC moderna, Repository Pattern, autenticação multi-nível e calendário interativo.',
                'sge-features': '<strong>Funcionalidades Principais:</strong> Sistema de agendamento com validação de conflitos, gestão de atléticas, cursos e modalidades esportivas, autenticação com níveis de acesso (User/Admin/SuperAdmin), relatórios detalhados e calendário interativo.',
                'sge-tech': '<strong>Stack Técnico:</strong> PHP 8.2, MySQL, JavaScript, Docker Compose, Composer com autoloading PSR-4, AJAX para interações assíncronas.',
                'sge-impact': '<strong>Impacto:</strong> Otimizando gestão de eventos para toda a comunidade acadêmica.',
                'github-repo': '🔗 Repositório GitHub',
                'education': 'Formação',
                'education-title': 'Unifio, Ourinhos — Bacharelado em Engenharia de Software',
                'education-description': 'Curso preparatório para atuação profissional em todas as etapas do desenvolvimento de software, desde projeto e levantamento de requisitos até construção, testes, deployment e manutenção. Utiliza metodologias ágeis, frameworks modernos e ferramentas do mercado atual. Inclui Projetos Integradores com foco em extensão, pesquisa acadêmica e empreendedorismo, proporcionando vivência prática e interação multidisciplinar.',
                'download-pdf': 'src/doc/curriculos/rafaeldiasgarcia_github_io.pdf',
                'download-filename': 'Rafael_Dias_Garcia_Curriculo.pdf',
                'download-title': 'Baixar Currículo em PDF'
            },
            'en-US': {
                'technologies': 'Technologies',
                'certifications': 'Certifications',
                'title': 'Software Engineering',
                'profile': 'Profile',
                'profile-text': 'Currently, I am in the second term of Software Engineering graduation, developing my foundation in programming logic, data structures and system development. I am curious, like to learn new technologies and am always looking for challenges that allow me to grow as a developer.<br><br>I have a special interest in backend development, software architecture and code optimization, but I also explore other areas of technology to become a complete professional. In addition, I have a strong appreciation for logic and creativity, skills that I also developed while studying classical guitar at the Conservatory of Tatuí.',
                'experience': 'Experience',
                'sge-title': 'SGE - Event Management System',
                'sge-company': 'UNIFIO - Centro Universitário das Faculdades Integradas de Ourinhos - In Development',
                'sge-description': 'Complete web system for managing sports court bookings, university athletics administration and event organization. Developed with modern MVC architecture, Repository Pattern, multi-level authentication and interactive calendar.',
                'sge-features': '<strong>Main Features:</strong> Booking system with conflict validation, athletics management, courses and sports modalities, authentication with access levels (User/Admin/SuperAdmin), detailed reports and interactive calendar.',
                'sge-tech': '<strong>Technical Stack:</strong> PHP 8.2, MySQL, JavaScript, Docker Compose, Composer with PSR-4 autoloading, AJAX for asynchronous interactions.',
                'sge-impact': '<strong>Impact:</strong> Optimizing event management for the entire academic community.',
                'github-repo': '🔗 GitHub Repository',
                'education': 'Education',
                'education-title': 'Unifio, Ourinhos — Bachelor in Software Engineering',
                'education-description': 'Preparatory course for professional performance in all stages of software development, from project and requirements gathering to construction, testing, deployment and maintenance. Uses agile methodologies, modern frameworks and current market tools. Includes Integrated Projects with focus on extension, academic research and entrepreneurship, providing practical experience and multidisciplinary interaction.',
                'download-pdf': 'src/doc/curriculos/rafaeldiasgarcia_github_io_en.pdf',
                'download-filename': 'Rafael_Dias_Garcia_Resume.pdf',
                'download-title': 'Download Resume PDF'
            },
            'es-ES': {
                'technologies': 'Tecnologías',
                'certifications': 'Certificaciones',
                'title': 'Ingeniería de Software',
                'profile': 'Perfil',
                'profile-text': 'Actualmente, estoy en el segundo término de la graduación en Ingeniería de Software, desarrollando mi base en lógica de programación, estructura de datos y desarrollo de sistemas. Soy curioso, me gusta aprender nuevas tecnologías y siempre estoy en busca de desafíos que me permitan crecer como desarrollador.<br><br>Tengo especial interés en desarrollo backend, arquitectura de software y optimización de código, pero también exploro otras áreas de la tecnología para convertirme en un profesional completo. Además, tengo un fuerte aprecio por la lógica y creatividad, habilidades que también desarrollé al estudiar guitarra clásica en el Conservatorio de Tatuí.',
                'experience': 'Experiencia',
                'sge-title': 'SGE - Sistema de Gestión de Eventos',
                'sge-company': 'UNIFIO - Centro Universitário das Faculdades Integradas de Ourinhos - En Desarrollo',
                'sge-description': 'Sistema web completo para gestión de reservas de canchas polideportivas, administración de atléticas universitarias y organización de eventos. Desarrollado con arquitectura MVC moderna, Repository Pattern, autenticación multi-nivel y calendario interactivo.',
                'sge-features': '<strong>Funcionalidades Principales:</strong> Sistema de reservas con validación de conflictos, gestión de atléticas, cursos y modalidades deportivas, autenticación con niveles de acceso (User/Admin/SuperAdmin), reportes detallados y calendario interactivo.',
                'sge-tech': '<strong>Stack Técnico:</strong> PHP 8.2, MySQL, JavaScript, Docker Compose, Composer con autoloading PSR-4, AJAX para interacciones asíncronas.',
                'sge-impact': '<strong>Impacto:</strong> Optimizando la gestión de eventos para toda la comunidad académica.',
                'github-repo': '🔗 Repositorio GitHub',
                'education': 'Formación',
                'education-title': 'Unifio, Ourinhos — Licenciatura en Ingeniería de Software',
                'education-description': 'Curso preparatorio para actuación profesional en todas las etapas del desarrollo de software, desde proyecto y levantamiento de requisitos hasta construcción, pruebas, deployment y mantenimiento. Utiliza metodologías ágiles, frameworks modernos y herramientas del mercado actual. Incluye Proyectos Integradores con enfoque en extensión, investigación académica y emprendimiento, proporcionando experiencia práctica e interacción multidisciplinaria.',
                'download-pdf': 'src/doc/curriculos/rafaeldiasgarcia_github_io_es.pdf',
                'download-filename': 'Rafael_Dias_Garcia_Curriculo.pdf',
                'download-title': 'Descargar Currículo en PDF'
            },
            'de-DE': {
                'technologies': 'Technologien',
                'certifications': 'Zertifizierungen',
                'title': 'Software Engineering',
                'profile': 'Profil',
                'profile-text': 'Derzeit bin ich im zweiten Semester des Software Engineering Studiums und entwickle meine Grundlagen in Programmierlogik, Datenstrukturen und Systementwicklung. Ich bin neugierig, lerne gerne neue Technologien und suche immer nach Herausforderungen, die mich als Entwickler wachsen lassen.<br><br>Ich habe besonderes Interesse an Backend-Entwicklung, Software-Architektur und Code-Optimierung, erkunde aber auch andere Bereiche der Technologie, um ein vollständiger Profi zu werden. Außerdem schätze ich Logik und Kreativität sehr, Fähigkeiten, die ich auch beim Studium der klassischen Gitarre am Konservatorium von Tatuí entwickelt habe.',
                'experience': 'Erfahrung',
                'sge-title': 'SGE - Event Management System',
                'sge-company': 'UNIFIO - Centro Universitário das Faculdades Integradas de Ourinhos - In Entwicklung',
                'sge-description': 'Vollständiges Web-System zur Verwaltung von Sportplatzbuchungen, Verwaltung von Universitätsathletik und Eventorganisation. Entwickelt mit moderner MVC-Architektur, Repository Pattern, Multi-Level-Authentifizierung und interaktivem Kalender.',
                'sge-features': '<strong>Hauptfunktionen:</strong> Buchungssystem mit Konfliktvalidierung, Athletikverwaltung, Kurse und Sportmodalitäten, Authentifizierung mit Zugriffsebenen (User/Admin/SuperAdmin), detaillierte Berichte und interaktiver Kalender.',
                'sge-tech': '<strong>Technischer Stack:</strong> PHP 8.2, MySQL, JavaScript, Docker Compose, Composer mit PSR-4 Autoloading, AJAX für asynchrone Interaktionen.',
                'sge-impact': '<strong>Auswirkung:</strong> Optimierung des Eventmanagements für die gesamte akademische Gemeinschaft.',
                'github-repo': '🔗 GitHub Repository',
                'education': 'Bildung',
                'education-title': 'Unifio, Ourinhos — Bachelor in Software Engineering',
                'education-description': 'Vorbereitungskurs für professionelle Leistung in allen Phasen der Softwareentwicklung, von Projekt und Anforderungserhebung bis hin zu Konstruktion, Tests, Deployment und Wartung. Verwendet agile Methodologien, moderne Frameworks und aktuelle Markttools. Beinhaltet Integrierte Projekte mit Fokus auf Extension, akademische Forschung und Unternehmertum, bietet praktische Erfahrung und multidisziplinäre Interaktion.',
                'download-pdf': 'src/doc/curriculos/rafaeldiasgarcia_github_io_de.pdf',
                'download-filename': 'Rafael_Dias_Garcia_Lebenslauf.pdf',
                'download-title': 'Lebenslauf PDF herunterladen'
            },
            'ja-JP': {
                'technologies': 'テクノロジー',
                'certifications': '認定資格',
                'title': 'ソフトウェア工学',
                'profile': 'プロフィール',
                'profile-text': '現在、ソフトウェア工学の2学期目に在学中で、プログラミングロジック、データ構造、システム開発の基礎を構築しています。好奇心旺盛で、新しいテクノロジーを学ぶことが好きで、開発者として成長できる挑戦を常に探しています。<br><br>バックエンド開発、ソフトウェアアーキテクチャ、コード最適化に特に興味がありますが、完全なプロフェッショナルになるためにテクノロジーの他の分野も探求しています。さらに、ロジックと創造性を強く評価しており、タトゥイ音楽院でクラシックギターを学んだ際にもこれらのスキルを開発しました。',
                'experience': '経験',
                'sge-title': 'SGE - イベント管理システム',
                'sge-company': 'UNIFIO - オウリーニョス統合大学センター - 開発中',
                'sge-description': 'スポーツコート予約管理、大学アスレチック管理、イベント組織化のための完全なウェブシステム。モダンなMVCアーキテクチャ、リポジトリパターン、マルチレベル認証、インタラクティブカレンダーで開発。',
                'sge-features': '<strong>主な機能:</strong> 競合検証付き予約システム、アスレチック管理、コースとスポーツモダリティ、アクセスレベル（User/Admin/SuperAdmin）による認証、詳細レポート、インタラクティブカレンダー。',
                'sge-tech': '<strong>技術スタック:</strong> PHP 8.2、MySQL、JavaScript、Docker Compose、PSR-4オートローディング付きComposer、非同期インタラクション用AJAX。',
                'sge-impact': '<strong>影響:</strong> 学術コミュニティ全体のイベント管理を最適化。',
                'github-repo': '🔗 GitHubリポジトリ',
                'education': '教育',
                'education-title': 'ウニフィオ、オウリーニョス — ソフトウェア工学学士',
                'education-description': 'プロジェクトと要件収集から構築、テスト、デプロイ、メンテナンスまで、ソフトウェア開発のすべての段階でプロフェッショナルなパフォーマンスのための準備コース。アジャイル方法論、モダンなフレームワーク、現在の市場ツールを使用。拡張、学術研究、起業家精神に焦点を当てた統合プロジェクトを含み、実践的な経験と多分野の相互作用を提供。',
                'download-pdf': 'src/doc/curriculos/rafaeldiasgarcia_github_io_jp.pdf',
                'download-filename': 'Rafael_Dias_Garcia_履歴書.pdf',
                'download-title': '履歴書PDFをダウンロード'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createMenu();
        this.bindEvents();
        this.loadSavedLanguage();
    }
    
    createMenu() {
        const topBar = document.querySelector('.top-bar');
        if (!topBar) return;
        
        const currentFlag = this.languageFlags[this.currentLanguage] || '🇧🇷';
        
        const menuHTML = `
            <div class="language-menu">
                <button class="menu-toggle" aria-label="Language Menu">
                    <span class="flag-icon">${currentFlag}</span>
                </button>
                <div class="language-dropdown">
                    <button class="language-option active" data-lang="pt-BR">🇧🇷 Português</button>
                    <button class="language-option" data-lang="en-US">🇺🇸 English</button>
                    <button class="language-option" data-lang="es-ES">🇪🇸 Español</button>
                    <button class="language-option" data-lang="de-DE">🇩🇪 Deutsch</button>
                    <button class="language-option" data-lang="ja-JP">🇯🇵 日本語</button>
                </div>
            </div>
        `;
        
        topBar.insertAdjacentHTML('afterbegin', menuHTML);
    }
    
    bindEvents() {
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });
        }
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                this.closeMenu();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-menu')) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        
        if (menuToggle && dropdown) {
            menuToggle.classList.toggle('active');
            dropdown.classList.toggle('active');
        }
    }
    
    closeMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        
        if (menuToggle && dropdown) {
            menuToggle.classList.remove('active');
            dropdown.classList.remove('active');
        }
    }
    
    changeLanguage(lang) {
        if (this.currentLanguage === lang) return;
        
        this.currentLanguage = lang;
        this.updateActiveOption(lang);
        this.updateFlagIcon(lang);
        this.translateContent(lang);
        this.saveLanguage(lang);
    }
    
    updateFlagIcon(lang) {
        const flagIcon = document.querySelector('.menu-toggle .flag-icon');
        if (flagIcon && this.languageFlags[lang]) {
            flagIcon.textContent = this.languageFlags[lang];
        }
    }
    
    updateActiveOption(lang) {
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            }
        });
    }
    
    translateContent(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        const translations = this.translations[lang];
        
        if (!translations) return;
        
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Update download button
        this.updateDownloadButton(lang);
    }
    
    updateDownloadButton(lang) {
        const downloadLink = document.querySelector('.download-link');
        const translations = this.translations[lang];
        
        if (!downloadLink || !translations) return;
        
        // Update href, download attribute and title
        downloadLink.href = translations['download-pdf'];
        downloadLink.download = translations['download-filename'];
        downloadLink.title = translations['download-title'];
    }
    
    saveLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
            this.changeLanguage(savedLang);
        } else {
            // Update flag icon with default language
            this.updateFlagIcon(this.currentLanguage);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageMenu();
});
