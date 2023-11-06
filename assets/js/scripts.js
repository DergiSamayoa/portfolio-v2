/* muestra el año del copy en footer */
function getYear() {
    const dataYear = document.getElementById("copy");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    dataYear.textContent = year;
}

/* actividad con el menú hamburguesa */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = function () {
    menuIcon.classList.toggle('bx-window-close');
    navbar.classList.toggle('active');
}

/* cambiar el menú activo con el movimiento del scroll */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.onscroll = function () {
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 140;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if ( top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove(`active`);
                document.querySelector(`nav a[href*=` + id + `]`).classList.add(`active`);
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 150);

    /* para remover el navbar y el close del menú cuando se activa un link */
    menuIcon.classList.remove('bx-window-close');
    navbar.classList.remove('active');
};

