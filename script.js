// Animación al hacer scroll con Intersection Observer
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
hiddenElements.forEach(el => observer.observe(el));

// Navbar cambia al scrollear
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Botón volver arriba
const btnTop = document.getElementById("btnTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Efecto brillante al pasar el mouse sobre títulos
const titles = document.querySelectorAll(".glow");
titles.forEach(title => {
  title.addEventListener("mouseenter", () => {
    title.style.textShadow = "0 0 20px #fff, 0 0 40px #ffdd57";
  });
  title.addEventListener("mouseleave", () => {
    title.style.textShadow = "0 0 10px #ffdd57, 0 0 20px #ffdd57";
  });
});
