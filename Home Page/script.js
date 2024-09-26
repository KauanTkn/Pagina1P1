let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function mudarSlide(n) {
    slideIndex += n;

    // Verifica se o índice é maior que o número de slides
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    // Verifica se o índice é menor que 0 (se for para a esquerda)
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Ajusta transição dos slides
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
