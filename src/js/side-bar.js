// Função para ajustar a altura da página baseada no conteúdo mais baixo
function adjustPageHeight() {
    const page = document.querySelector('.page');
    const sidebar = document.querySelector('.side-bar');
    const contentContainer = document.querySelector('.content-container');
    
    if (page && sidebar && contentContainer) {
        // Calcula a posição inferior de cada elemento (top + height)
        const sidebarBottom = sidebar.offsetTop + sidebar.offsetHeight;
        const contentBottom = contentContainer.offsetTop + contentContainer.offsetHeight;
        
        // Pega o elemento mais baixo
        const maxBottom = Math.max(sidebarBottom, contentBottom);
        
        // Calcula a altura necessária da página (posição do elemento mais baixo - top da página + pequena margem)
        const pageTop = page.offsetTop;
        const requiredHeight = maxBottom - pageTop + 20; // 20px de margem inferior
        
        // Aplica a altura mínima necessária (sem forçar altura muito grande)
        page.style.minHeight = requiredHeight + 'px';
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Pequeno delay para garantir que o layout foi renderizado
    setTimeout(adjustPageHeight, 100);
    adjustPageHeight();
});

// Executa quando a janela é redimensionada
window.addEventListener('resize', function() {
    setTimeout(adjustPageHeight, 100);
});

// Executa quando o conteúdo muda (para novos itens adicionados)
const sidebar = document.querySelector('.side-bar');
const contentContainer = document.querySelector('.content-container');
if (sidebar) {
    const observer = new MutationObserver(function() {
        setTimeout(adjustPageHeight, 100);
    });
    observer.observe(sidebar, {
        childList: true,
        subtree: true,
        characterData: true
    });
}
if (contentContainer) {
    const observer = new MutationObserver(function() {
        setTimeout(adjustPageHeight, 100);
    });
    observer.observe(contentContainer, {
        childList: true,
        subtree: true,
        characterData: true
    });
}
