// Certifications Menu Functionality
class CertificationsMenu {
    constructor() {
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        const menuToggle = document.querySelector('.certifications-toggle');
        const dropdown = document.querySelector('.certifications-dropdown');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.certifications-menu')) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        const menuToggle = document.querySelector('.certifications-toggle');
        const dropdown = document.querySelector('.certifications-dropdown');
        
        if (menuToggle && dropdown) {
            menuToggle.classList.toggle('active');
            dropdown.classList.toggle('active');
        }
    }
    
    closeMenu() {
        const menuToggle = document.querySelector('.certifications-toggle');
        const dropdown = document.querySelector('.certifications-dropdown');
        
        if (menuToggle && dropdown) {
            menuToggle.classList.remove('active');
            dropdown.classList.remove('active');
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CertificationsMenu();
});

