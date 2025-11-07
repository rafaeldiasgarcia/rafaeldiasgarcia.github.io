// Certifications Menu Functionality
class CertificationsMenu {
    constructor() {
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        const certificationMenus = document.querySelectorAll('.certifications-menu');
        
        certificationMenus.forEach(menu => {
            const menuToggle = menu.querySelector('.certifications-toggle');
            const dropdown = menu.querySelector('.certifications-dropdown');
            const certificationOptions = menu.querySelectorAll('.certification-option');
            
            if (menuToggle) {
                menuToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleMenu(menu);
                });
            }
            
            // Close menu when clicking on a certification option
            certificationOptions.forEach(option => {
                option.addEventListener('click', () => {
                    this.closeMenu(menu);
                });
            });
        });
        
        // Close all menus when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.certifications-menu')) {
                certificationMenus.forEach(menu => {
                    this.closeMenu(menu);
                });
            }
        });
    }
    
    toggleMenu(menu) {
        const menuToggle = menu.querySelector('.certifications-toggle');
        const dropdown = menu.querySelector('.certifications-dropdown');
        
        if (menuToggle && dropdown) {
            // Close all other menus first
            const allMenus = document.querySelectorAll('.certifications-menu');
            allMenus.forEach(otherMenu => {
                if (otherMenu !== menu) {
                    this.closeMenu(otherMenu);
                }
            });
            
            menuToggle.classList.toggle('active');
            dropdown.classList.toggle('active');
        }
    }
    
    closeMenu(menu) {
        const menuToggle = menu.querySelector('.certifications-toggle');
        const dropdown = menu.querySelector('.certifications-dropdown');
        
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

