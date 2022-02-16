const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
})


let counters = document.querySelectorAll('.skills__progress__subtitle');
let lines = document.querySelectorAll('.progress__bar-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});