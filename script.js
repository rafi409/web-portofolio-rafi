// Toggle class active
const nabarNav = document.querySelector('.navbar-nav');
// ketika portofolio menu di klik
document.querySelector('#webportofolio-menu').onclick = () => {
    nabarNav.classList.toggle('active');
};

const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    // Menambahkan/menghapus class 'active' pada menu
    navList.classList.toggle('active');
});