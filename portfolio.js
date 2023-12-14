//navbar scroll sections
let sections = document.querySelectorAl1('section' );
let navLinks = document.querySelectorAl1('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id') ;

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector ('header nav a[href*=' +id+ ']');
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly>100);
}