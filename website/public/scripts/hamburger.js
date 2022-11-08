const menuToggle = document.querySelector('.toggle')
const menuMobile = document.querySelector('.menuMobile')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuMobile.classList.toggle('active');
})