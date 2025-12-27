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
});