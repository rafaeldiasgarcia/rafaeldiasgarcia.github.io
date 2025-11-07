// Ajusta o zoom automaticamente baseado no tamanho da tela do celular
// Mantém o layout idêntico ao PC, apenas ajusta o zoom
(function() {
    function setViewportZoom() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) return;
        
        // Largura da página (desktop)
        const pageWidth = 1200;
        
        // Largura da tela do dispositivo
        // Usa screen.width para pegar a largura real antes de qualquer zoom
        const screenWidth = screen.width || window.innerWidth || 375;
        
        // Calcula o zoom ideal para que a página caiba perfeitamente na tela
        // Adiciona um pequeno padding (10px de cada lado) para não ficar colado
        const availableWidth = screenWidth - 20;
        let initialScale = availableWidth / pageWidth;
        
        // Limita o zoom para evitar valores extremos
        // Mínimo: 0.2 (para telas muito pequenas)
        // Máximo: 0.4 (para tablets, mas ainda mantém zoom)
        initialScale = Math.max(0.2, Math.min(0.4, initialScale));
        
        // Atualiza o viewport com o zoom calculado
        viewport.setAttribute('content', `width=${pageWidth}, initial-scale=${initialScale.toFixed(3)}, maximum-scale=5.0, user-scalable=yes`);
    }
    
    // Executa imediatamente quando o script carrega
    setViewportZoom();
    
    // Recalcula quando a janela é redimensionada
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(setViewportZoom, 100);
    });
    
    // Recalcula quando a orientação muda (portrait/landscape)
    window.addEventListener('orientationchange', function() {
        setTimeout(setViewportZoom, 200);
    });
})();

