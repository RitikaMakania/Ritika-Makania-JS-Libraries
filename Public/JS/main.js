// Initialize AOS
AOS.init();

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Glide Carousel
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    autoplay: 3000,
    perView: 1,
    breakpoints: {
        768: { perView: 1 },
        1024: { perView: 2 },
        1280: { perView: 3 }
    }
}).mount();

// Leaflet Map
const map = L.map('travel-map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors',
    maxZoom: 18,
}).addTo(map);

const cities = [
    { coords: [40.7128, -74.0060], name: 'New York' },
    { coords: [51.5074, -0.1278], name: 'London' },
    { coords: [35.6895, 139.6917], name: 'Tokyo' },
    { coords: [25.2048, 55.2708], name: 'Dubai' }
];

cities.forEach(city => {
    L.marker(city.coords).addTo(map).bindPopup(city.name);
});
