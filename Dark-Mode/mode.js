const nav = document.querySelector('.navbar')
const darkMode = document.querySelector('#darkmode-icon')
const body = document.body;


darkMode.addEventListener('click', () => {

nav.classList.toggle('dark-nav')
body.classList.toggle('dark-mode')
});