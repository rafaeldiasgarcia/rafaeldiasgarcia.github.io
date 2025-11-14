// Fix aria-hidden accessibility warning by intercepting Bootstrap's behavior
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            // Override setAttribute to intercept aria-hidden changes
            const originalSetAttribute = modal.setAttribute.bind(modal);
            modal.setAttribute = function(name, value) {
                if (name === 'aria-hidden' && value === 'true') {
                    // Check if modal is currently visible
                    const isVisible = this.style.display === 'block' || 
                                    this.classList.contains('show') ||
                                    window.getComputedStyle(this).display === 'block';
                    
                    // Check if there's a focused element inside the modal
                    const focusedElement = this.querySelector(':focus');
                    
                    // Only set aria-hidden if modal is not visible AND no element is focused
                    if (!isVisible && !focusedElement) {
                        originalSetAttribute(name, value);
                    } else if (focusedElement) {
                        // If there's a focused element, remove focus first
                        focusedElement.blur();
                        // Then set aria-hidden after a small delay
                        setTimeout(() => {
                            if (!this.classList.contains('show') && this.style.display !== 'block') {
                                originalSetAttribute('aria-hidden', 'true');
                            }
                        }, 50);
                    }
                    // If visible, don't set it (this prevents the warning)
                    return;
                }
                originalSetAttribute(name, value);
            };
            
            // Listen to Bootstrap events
            modal.addEventListener('show.bs.modal', function() {
                this.removeAttribute('aria-hidden');
            });
            
            modal.addEventListener('shown.bs.modal', function() {
                this.removeAttribute('aria-hidden');
            });
            
            modal.addEventListener('hide.bs.modal', function() {
                // Remove focus from any focused element inside the modal before hiding
                const focusedElement = this.querySelector(':focus');
                if (focusedElement) {
                    focusedElement.blur();
                }
                // Don't set aria-hidden here - let Bootstrap handle it after modal is fully hidden
            });
            
            modal.addEventListener('hidden.bs.modal', function() {
                // Only set aria-hidden after modal is fully hidden and focus is removed
                setTimeout(() => {
                    originalSetAttribute('aria-hidden', 'true');
                }, 0);
            });
        });
        
        // Also use MutationObserver as a safety net
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'aria-hidden') {
                    const modal = mutation.target;
                    if (modal.classList.contains('modal')) {
                        const isVisible = modal.style.display === 'block' || 
                                        modal.classList.contains('show') ||
                                        window.getComputedStyle(modal).display === 'block';
                        
                        if (isVisible && modal.getAttribute('aria-hidden') === 'true') {
                            modal.removeAttribute('aria-hidden');
                        }
                    }
                }
            });
        });
        
        modals.forEach(modal => {
            observer.observe(modal, {
                attributes: true,
                attributeFilter: ['aria-hidden', 'style', 'class']
            });
        });
    });
})();

