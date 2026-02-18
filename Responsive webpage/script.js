// 1. Theme Toggle (Dark ↔ Light / White)
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeBtn.textContent = 'Dark Mode';
    } else {
        themeBtn.textContent = 'Light Mode';
    }
});

// 2. Mobile Menu Toggle (Hamburger)

const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
    navUl.classList.toggle('active');
});

