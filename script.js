

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  const isOpen = menu.classList.contains('flex');
  menu.classList.toggle('hidden', isOpen);
  menu.classList.toggle('flex', !isOpen);
  menuBtn.textContent = isOpen ? '☰' : '✕';
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      menuBtn.textContent = '☰';
    }
  });
});


const revealElements = document.querySelectorAll(
  '.bg-white, #sobre p'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealElements.forEach(el => observer.observe(el));


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });