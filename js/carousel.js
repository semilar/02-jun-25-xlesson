const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
let index = 0;

// Buat dots sesuai jumlah gambar
images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('.carousel-dot');

function showSlide(idx) {
    if (idx < 0) idx = images.length - 1;
    if (idx >= images.length) idx = 0;
    carousel.style.transform = `translateX(-${idx * 100}%)`;
    index = idx;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Auto-slide
setInterval(() => showSlide(index + 1), 4000);

// Inisialisasi
showSlide(0);