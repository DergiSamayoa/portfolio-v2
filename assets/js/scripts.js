/* muestra el año del copy en footer */
function getYear() {
    const dataYear = document.getElementById("copy");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    dataYear.textContent = year;
}

/* activar el menú activo con el movimiento del scroll */
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
};




console.dir(window);

console.dir(document)