window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
});
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});
document.querySelectorAll('.content1').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.remove('spin-once');
    void card.offsetWidth;
    card.classList.add('spin-once');
    setTimeout(() => {
      card.classList.remove('spin-once');
    }, 1000); 
  });
});

