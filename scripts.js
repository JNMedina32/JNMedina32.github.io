//links imgs to navbar links on mouse events
document.querySelectorAll('.navbar a').forEach(link => {
    link.onmouseenter = () => {
        document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
    };
    link.onmouseleave = () => {
        document.querySelector('.navbar-img img').src = "Resources/navbar-images/navbar-img-1.jpg";
    };
});
//Displays Profile Image while hovering over name
let homeImg = document.querySelector('.home .home-img');

document.querySelector('.home').onmousemove = (e) => {
    homeImg.style.top = e.pageY + 'px';
    homeImg.style.left = e.pageX + 'px';
}
//variables for navbar
let navbar = document.querySelector('.navbar');
let navbarImg = document.querySelector('.navbar-img');
//hides and shows nav bar elements
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    navbarImg.classList.toggle('active');
};
window.onscroll = () => {
    navbar.classList.remove('active');
    navbarImg.classList.remove('active');
};