// Script para a página PGL Heineken
document.addEventListener('DOMContentLoaded', function() {
    console.log('PGL Heineken - Página carregada');

    // Adicionar efeito de hover nos links
    const docLinks = document.querySelectorAll('.doc-link');

    docLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});