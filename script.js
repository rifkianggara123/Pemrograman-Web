document.getElementById('menu-bars').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// Initialize Swiper.js
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // Delay 3 detik untuk auto slide
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
