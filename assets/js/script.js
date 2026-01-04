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

    // Projects Expandable Drawer (All Screens)
    const showMoreBtn = document.getElementById('showMoreProjectsBtn');
    const moreProjectsItems = document.querySelectorAll('.more-projects-item');
    const allPeekCards = document.querySelectorAll('.project-peek-container');
    const peekBreak = document.getElementById('peekBreak');

    if (showMoreBtn && moreProjectsItems.length > 0) {
        showMoreBtn.addEventListener('click', function() {
            const isExpanded = showMoreBtn.classList.contains('expanded');
            
            if (isExpanded) {
                // Remove expanded state immediately to update button
                showMoreBtn.classList.remove('expanded');
                
                // Collapse - animate items going UP before hiding
                moreProjectsItems.forEach(item => {
                    // Only animate items that have the 'visible' class
                    if (item.classList.contains('visible')) {
                        // Remove visible and add closing class for animation
                        item.classList.remove('visible');
                        item.classList.add('closing');
                    }
                });
                
                // Wait for animation to finish (300ms) then clean up and show peek cards
                setTimeout(() => {
                    moreProjectsItems.forEach(item => {
                        if (item.classList.contains('closing')) {
                            item.classList.remove('closing');
                        }
                    });
                    
                    // Show peek cards immediately after cleanup (no transition to avoid flicker)
                    allPeekCards.forEach(peek => {
                        peek.style.transition = 'none';
                        peek.style.opacity = '0';
                        peek.classList.remove('hidden');
                        
                        // Fade in smoothly with same duration as slideDown (0.4s)
                        requestAnimationFrame(() => {
                            peek.style.transition = 'opacity 0.4s ease-out';
                            peek.style.opacity = '';
                            
                            // Clean up inline styles after transition
                            setTimeout(() => {
                                peek.style.transition = '';
                                peek.style.opacity = '';
                            }, 400);
                        });
                    });
                    
                    if (peekBreak) {
                        peekBreak.classList.remove('hidden');
                    }
                }, 300);
                
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
            } else {
                // Expand - only animate items that are actually hidden
                moreProjectsItems.forEach(item => {
                    // Check if item is currently hidden (display: none)
                    const isHidden = window.getComputedStyle(item).display === 'none';
                    
                    // Only add 'visible' class to items that are hidden
                    if (isHidden) {
                        item.classList.add('visible');
                    }
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
                
                // Hide all peek cards and break
                allPeekCards.forEach(peek => {
                    peek.classList.add('hidden');
                });
                if (peekBreak) {
                    peekBreak.classList.add('hidden');
                }
            }
        });

        // Click on any peek card to expand
        allPeekCards.forEach(peek => {
            peek.addEventListener('click', function() {
                showMoreBtn.click();
            });
        });
    }

    // Experience Expandable Drawer
    const showMoreExperienceBtn = document.getElementById('showMoreExperienceBtn');
    const moreExperienceItems = document.querySelectorAll('.more-experience-item');

    if (showMoreExperienceBtn && moreExperienceItems.length > 0) {
        showMoreExperienceBtn.addEventListener('click', function() {
            const isExpanded = showMoreExperienceBtn.classList.contains('expanded');
            
            if (isExpanded) {
                // Remove expanded state immediately to update button
                showMoreExperienceBtn.classList.remove('expanded');
                
                // Collapse - animate items going UP before hiding
                moreExperienceItems.forEach(item => {
                    if (item.classList.contains('visible')) {
                        item.classList.remove('visible');
                        item.classList.add('closing');
                    }
                });
                
                // Wait for animation to finish (300ms) then clean up
                setTimeout(() => {
                    moreExperienceItems.forEach(item => {
                        if (item.classList.contains('closing')) {
                            item.classList.remove('closing');
                        }
                    });
                }, 300);
                
                // Update button text
                const btnText = showMoreExperienceBtn.querySelector('[data-i18n]');
                if (btnText) {
                    if (window.i18n && window.i18n.translate) {
                        btnText.textContent = window.i18n.translate('experience.showMore');
                    } else {
                        btnText.textContent = 'Ver Mais Experiências';
                    }
                }
                
                // Update icon
                const icon = showMoreExperienceBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-chevron-down ms-2';
                }
            } else {
                // Expand - show hidden items
                moreExperienceItems.forEach(item => {
                    item.classList.add('visible');
                });
                showMoreExperienceBtn.classList.add('expanded');
                
                // Update button text
                const btnText = showMoreExperienceBtn.querySelector('[data-i18n]');
                if (btnText) {
                    if (window.i18n && window.i18n.translate) {
                        btnText.textContent = window.i18n.translate('experience.showLess');
                    } else {
                        btnText.textContent = 'Ver Menos';
                    }
                }
                
                // Update icon
                const icon = showMoreExperienceBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-chevron-up ms-2';
                }
            }
        });
    }
});