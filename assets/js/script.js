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
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenuSidebar.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
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

    // Function to open PDF viewer modal
    window.openPdfViewer = function(pdfPath, title) {
        const pdfFrame = document.getElementById('pdfFrame');
        const pdfTitle = document.getElementById('pdfTitle');
        const pdfViewerModalElement = document.getElementById('pdfViewerModal');
        const certsModalElement = document.getElementById('certsModal');
        
        // Set PDF source and title
        pdfFrame.src = pdfPath;
        pdfTitle.textContent = title;
        
        // Close certificates modal properly
        const certsModal = bootstrap.Modal.getInstance(certsModalElement);
        if (certsModal) {
            certsModalElement.addEventListener('hidden.bs.modal', function openPdfAfterClose() {
                // Open PDF viewer after certs modal is fully closed
                const pdfViewerModal = new bootstrap.Modal(pdfViewerModalElement);
                pdfViewerModal.show();
                // Remove the event listener after it fires
                certsModalElement.removeEventListener('hidden.bs.modal', openPdfAfterClose);
            }, { once: true });
            certsModal.hide();
        } else {
            // If certs modal isn't open, just open the PDF viewer
            const pdfViewerModal = new bootstrap.Modal(pdfViewerModalElement);
            pdfViewerModal.show();
        }
    }

    // Clean up PDF iframe when viewer modal is closed
    const pdfViewerModalElement = document.getElementById('pdfViewerModal');
    if (pdfViewerModalElement) {
        pdfViewerModalElement.addEventListener('hidden.bs.modal', function() {
            const pdfFrame = document.getElementById('pdfFrame');
            if (pdfFrame) {
                pdfFrame.src = '';
            }
        });
    }

    // Projects Expandable Drawer (Mobile)
    const showMoreBtn = document.getElementById('showMoreProjectsBtn');
    const moreProjectsItems = document.querySelectorAll('.more-projects-item');
    const projectPeekContainer = document.querySelector('.project-peek-container');

    if (showMoreBtn && moreProjectsItems.length > 0) {
        showMoreBtn.addEventListener('click', function() {
            const isExpanded = showMoreBtn.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse
                moreProjectsItems.forEach(item => {
                    item.classList.remove('visible');
                });
                showMoreBtn.classList.remove('expanded');
                
                // Update button text
                const btnText = showMoreBtn.querySelector('[data-i18n]');
                if (btnText) {
                    // Use i18n if available
                    if (window.i18n && window.i18n.translate) {
                        btnText.textContent = window.i18n.translate('projects.showMore');
                    } else {
                        btnText.textContent = 'Ver Mais Projetos';
                    }
                }
                
                // Show peek card again
                if (projectPeekContainer) {
                    projectPeekContainer.classList.remove('hidden');
                }
                
                // Scroll back to projects section
                setTimeout(() => {
                    const projectsSection = document.getElementById('projetos');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                // Expand
                moreProjectsItems.forEach(item => {
                    item.classList.add('visible');
                });
                showMoreBtn.classList.add('expanded');
                
                // Update button text
                const btnText = showMoreBtn.querySelector('[data-i18n]');
                if (btnText) {
                    // Use i18n if available
                    if (window.i18n && window.i18n.translate) {
                        btnText.textContent = window.i18n.translate('projects.showLess');
                    } else {
                        btnText.textContent = 'Ver Menos';
                    }
                }
                
                // Hide peek card
                if (projectPeekContainer) {
                    projectPeekContainer.classList.add('hidden');
                }
            }
        });

        // Optional: Click on peek card to expand
        if (projectPeekContainer) {
            projectPeekContainer.addEventListener('click', function() {
                showMoreBtn.click();
            });
        }
    }
});