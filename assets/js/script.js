document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const html = document.documentElement;

    // Carregar tema salvo ou usar padrão (light)
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    // Inicializar tooltips do Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Mobile Menu Sidebar
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuSidebar = document.getElementById('mobileMenuSidebar');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-item');

    function openMobileMenu() {
        mobileMenuSidebar.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMobileMenu() {
        mobileMenuSidebar.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Fechar menu ao clicar em um link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Fechar menu ao clicar no botão "Vamos conversar"
    const mobileContactBtn = document.querySelector('.mobile-menu-footer .btn-primary');
    if (mobileContactBtn) {
        mobileContactBtn.addEventListener('click', closeMobileMenu);
    }

    // Fechar menu com tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileMenuSidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Language Selector (Desktop)
    const languageSelectorBtn = document.getElementById('languageSelectorBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageSelectorBtn && languageDropdown) {
        languageSelectorBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageSelectorBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('show');
            }
        });
    }
    
    // Language Selector (Mobile)
    const mobileLanguageBtn = document.getElementById('mobileLanguageBtn');
    const mobileLanguageDropdown = document.getElementById('mobileLanguageDropdown');
    
    if (mobileLanguageBtn && mobileLanguageDropdown) {
        mobileLanguageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileLanguageDropdown.classList.toggle('show');
        });
    }

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const submitBtn = form.querySelector('button[type="submit"]');

            // Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    form.classList.add('d-none');
                    successMessage.classList.remove('d-none');
                    form.reset();
                } else {
                    throw new Error('Erro no envio');
                }
            } catch (error) {
                form.classList.add('d-none');
                errorMessage.classList.remove('d-none');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Enviar Agora';
            }
        });
    }

    // Expose resetForm to global scope if needed for the inline onclick handler
    window.resetForm = function() {
        if(form) form.classList.remove('d-none');
        if(errorMessage) errorMessage.classList.add('d-none');
    }

    // Projects Expandable Drawer
    const showMoreProjectsBtn = document.getElementById('showMoreProjectsBtn');
    const projectsWrapper = document.getElementById('projectsWrapper');

    if (showMoreProjectsBtn && projectsWrapper) {
        showMoreProjectsBtn.addEventListener('click', function() {
            const isExpanded = projectsWrapper.classList.contains('expanded');
            
            if (!isExpanded) {
                // Expanding: set max-height to the exact scrollHeight
                const fullHeight = projectsWrapper.scrollHeight;
                projectsWrapper.style.maxHeight = fullHeight + 'px';
                projectsWrapper.classList.add('expanded');
            } else {
                // Collapsing: clear inline style to return to CSS default
                projectsWrapper.style.maxHeight = '';
                projectsWrapper.classList.remove('expanded');
            }
            
            const btnText = showMoreProjectsBtn.querySelector('[data-i18n]');
            if (btnText) {
                if (window.i18n && window.i18n.translate) {
                    btnText.textContent = !isExpanded ? 
                        window.i18n.translate('projects.showLess') : 
                        window.i18n.translate('projects.showMore');
                } else {
                    btnText.textContent = !isExpanded ? 'Ver Menos' : 'Ver Mais Projetos';
                }
            }

            const icon = showMoreProjectsBtn.querySelector('i');
            if (icon) {
                icon.className = !isExpanded ? 'fas fa-chevron-up ms-2' : 'fas fa-chevron-down ms-2';
            }
        });
    }

    // Experience Expandable Drawer
    const showMoreExperienceBtn = document.getElementById('showMoreExperienceBtn');
    const experienceWrapper = document.getElementById('experienceWrapper');

    if (showMoreExperienceBtn && experienceWrapper) {
        showMoreExperienceBtn.addEventListener('click', function() {
            const isExpanded = experienceWrapper.classList.contains('expanded');
            
            if (!isExpanded) {
                // Expanding
                const fullHeight = experienceWrapper.scrollHeight;
                experienceWrapper.style.maxHeight = fullHeight + 'px';
                experienceWrapper.classList.add('expanded');
            } else {
                // Collapsing
                experienceWrapper.style.maxHeight = '';
                experienceWrapper.classList.remove('expanded');
            }
            
            const btnText = showMoreExperienceBtn.querySelector('[data-i18n]');
            if (btnText) {
                if (window.i18n && window.i18n.translate) {
                    btnText.textContent = !isExpanded ? 
                        window.i18n.translate('experience.showLess') : 
                        window.i18n.translate('experience.showMore');
                } else {
                    btnText.textContent = !isExpanded ? 'Ver Menos' : 'Ver Mais Experiências';
                }
            }
            
            const icon = showMoreExperienceBtn.querySelector('i');
            if (icon) {
                icon.className = !isExpanded ? 'fas fa-chevron-up ms-2' : 'fas fa-chevron-down ms-2';
            }
        });
    }

    // Techs Expandable Drawer
    const showMoreTechsBtn = document.getElementById('showMoreTechsBtn');
    const techsWrapper = document.getElementById('techsWrapper');

    if (showMoreTechsBtn && techsWrapper) {
        showMoreTechsBtn.addEventListener('click', function() {
            const isExpanded = techsWrapper.classList.contains('expanded');
            
            if (!isExpanded) {
                // Expanding
                const fullHeight = techsWrapper.scrollHeight;
                techsWrapper.style.maxHeight = fullHeight + 'px';
                techsWrapper.classList.add('expanded');
            } else {
                // Collapsing
                techsWrapper.style.maxHeight = '';
                techsWrapper.classList.remove('expanded');
            }
            
            const btnText = showMoreTechsBtn.querySelector('[data-i18n]');
            if (btnText) {
                if (window.i18n && window.i18n.translate) {
                    btnText.textContent = !isExpanded ? 
                        window.i18n.translate('tech.showLess') : 
                        window.i18n.translate('tech.showMore');
                } else {
                    btnText.textContent = !isExpanded ? 'Ver Menos' : 'Ver Mais Tecnologias';
                }
            }
            
            const icon = showMoreTechsBtn.querySelector('i');
            if (icon) {
                icon.className = !isExpanded ? 'fas fa-chevron-up ms-2' : 'fas fa-chevron-down ms-2';
            }
        });
    }

    // Latest Posts Expandable Drawer (Mobile only)
    const showMoreLatestPostsBtn = document.getElementById('showMoreLatestPostsBtn');
    const latestPostsWrapper = document.getElementById('latestPostsWrapper');
    const latestPostsMobileMedia = window.matchMedia('(max-width: 767px)');

    function updateLatestPostsButton(isExpanded) {
        if (!showMoreLatestPostsBtn) {
            return;
        }

        const btnText = showMoreLatestPostsBtn.querySelector('[data-i18n]');
        const icon = showMoreLatestPostsBtn.querySelector('i');

        if (btnText) {
            if (window.i18n && window.i18n.translate) {
                btnText.textContent = isExpanded
                    ? window.i18n.translate('blog.showLess')
                    : window.i18n.translate('blog.showMore');
            } else {
                btnText.textContent = isExpanded ? 'Ver Menos' : 'Ver Mais Artigos';
            }
        }

        if (icon) {
            icon.className = isExpanded ? 'fas fa-chevron-up ms-2' : 'fas fa-chevron-down ms-2';
        }
    }

    if (showMoreLatestPostsBtn && latestPostsWrapper) {
        const latestPostCards = latestPostsWrapper.querySelectorAll('.latest-post-card');
        const latestPostsRow = latestPostsWrapper.querySelector('.row');

        function getLatestPostsCollapsedHeight() {
            const firstItem = latestPostsWrapper.querySelector('.latest-post-item');

            if (!firstItem || !latestPostsRow) {
                return null;
            }

            const rowStyles = window.getComputedStyle(latestPostsRow);
            const rowGap = parseFloat(rowStyles.rowGap || rowStyles.gap || '0');
            const peekHeight = 96;

            return Math.ceil(firstItem.offsetHeight + rowGap + peekHeight);
        }

        if (latestPostCards.length <= 1) {
            showMoreLatestPostsBtn.style.display = 'none';
        } else {
            const syncLatestPostsDrawer = () => {
                if (!latestPostsMobileMedia.matches) {
                    latestPostsWrapper.style.maxHeight = '';
                    latestPostsWrapper.classList.remove('expanded');
                    updateLatestPostsButton(false);
                    return;
                }

                if (latestPostsWrapper.classList.contains('expanded')) {
                    latestPostsWrapper.style.maxHeight = latestPostsWrapper.scrollHeight + 'px';
                    updateLatestPostsButton(true);
                    return;
                }

                const collapsedHeight = getLatestPostsCollapsedHeight();
                latestPostsWrapper.style.maxHeight = collapsedHeight ? collapsedHeight + 'px' : '';
                updateLatestPostsButton(false);
            };

            showMoreLatestPostsBtn.addEventListener('click', function() {
                if (!latestPostsMobileMedia.matches) {
                    return;
                }

                const isExpanded = latestPostsWrapper.classList.contains('expanded');

                if (!isExpanded) {
                    latestPostsWrapper.style.maxHeight = latestPostsWrapper.scrollHeight + 'px';
                    latestPostsWrapper.classList.add('expanded');
                } else {
                    const collapsedHeight = getLatestPostsCollapsedHeight();
                    latestPostsWrapper.style.maxHeight = collapsedHeight ? collapsedHeight + 'px' : '';
                    latestPostsWrapper.classList.remove('expanded');
                }

                updateLatestPostsButton(!isExpanded);
            });

            window.addEventListener('resize', syncLatestPostsDrawer);
            syncLatestPostsDrawer();
        }
    }
});
