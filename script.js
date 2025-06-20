document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    // Configura o evento de clique para a seta anterior
    prevArrow.addEventListener('click', function() {
        slider.scrollBy({
            left: -slider.offsetWidth * 0.8,
            behavior: 'smooth'
        });
    });
    
    // Configura o evento de clique para a próxima seta
    nextArrow.addEventListener('click', function() {
        slider.scrollBy({
            left: slider.offsetWidth * 0.8,
            behavior: 'smooth'
        });
    });
});