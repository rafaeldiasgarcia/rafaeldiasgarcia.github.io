
// Função para ajustar a altura da página baseada no conteúdo da sidebar
function adjustPageHeight() {
    const page = document.querySelector('.page');
    const sidebar = document.querySelector('.side-bar');
    const contentContainer = document.querySelector('.content-container');
    
    if (page && sidebar && contentContainer) {
        // Verifica se é mobile (sidebar com position: static)
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // No mobile, não força altura na sidebar
            page.style.minHeight = 'auto';
            sidebar.style.height = 'auto';
        } else {
            // No desktop, mantém a lógica original
            const sidebarHeight = sidebar.offsetHeight + 60; // 60px é o top da sidebar
            const contentHeight = contentContainer.offsetHeight;
            
            // Usa a maior altura entre sidebar e conteúdo
            const requiredHeight = Math.max(sidebarHeight, contentHeight) + 160; // 160px para margens
            
            // Aplica a altura mínima necessária
            page.style.minHeight = Math.max(requiredHeight, window.innerHeight - 160) + 'px';
            
            // Ajusta a sidebar para seguir o limite da folha (página)
            const pageContentHeight = Math.max(sidebarHeight, contentHeight) + 160;
            const sidebarTop = 60; // top da sidebar
            const sidebarBottom = 20; // espaçamento do bottom
            const availableHeight = pageContentHeight - sidebarTop - sidebarBottom;
            
            sidebar.style.height = availableHeight + 'px';
        }
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Ajusta a altura da página
    adjustPageHeight();
});

// Executa quando a janela é redimensionada
window.addEventListener('resize', adjustPageHeight);

// Executa quando o conteúdo muda (para novos itens adicionados)
const sidebar = document.querySelector('.side-bar');
if (sidebar) {
    const observer = new MutationObserver(adjustPageHeight);
    observer.observe(sidebar, {
        childList: true,
        subtree: true,
        characterData: true
    });
}
