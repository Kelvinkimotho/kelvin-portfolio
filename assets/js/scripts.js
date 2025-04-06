// Scroll to top smooth behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll animations (you can add more)
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    let heroSection = document.querySelector('.hero');
    if (scrollPos > 150) {
        heroSection.classList.add('animate__fadeOut');
    } else {
        heroSection.classList.remove('animate__fadeOut');
    }
});
