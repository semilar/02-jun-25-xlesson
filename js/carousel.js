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


// popup
window.addEventListener("DOMContentLoaded", function() {
  let nama = prompt("Masukkan nama Anda:", "Nama Anda");
  if (nama && nama.trim() !== "") {
    // Jadikan nama kapital semua huruf
    nama = nama.trim().toUpperCase();
    document.querySelector("h1").textContent = `Hi, ${nama} Selamat Datang di My Page`;
  }
});

//pesan form
const form = document.getElementById('messageForm');

    function updateTime() {
      const now = new Date();
      document.getElementById('currentTime').textContent = now.toString();
    }

    updateTime(); // Update saat pertama kali dibuka

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value;
      const tgl = document.getElementById('tgl').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const pesan = document.getElementById('pesan').value;

      document.getElementById('outNama').textContent = nama;
      document.getElementById('outTgl').textContent = tgl;
      document.getElementById('outGender').textContent = gender;
      document.getElementById('outPesan').textContent = pesan;

      updateTime(); // Update waktu saat submit
    });
