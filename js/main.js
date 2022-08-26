const menuToggle = document.querySelector('#toggle');
const collapse = document.querySelector('.collapse');

menuToggle.addEventListener('click', () => {
    collapse.classList.toggle('active');
})