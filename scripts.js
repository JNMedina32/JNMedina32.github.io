document.querySelectorAll('.navbar a').forEach(link => {
    link.onmouseenter = () => {
        document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
    };
    link.onmouseleave = () => {
        document.querySelector('.navbar-img img').src = 'Resources\navbar-images\navbar-img-1';
    };
})