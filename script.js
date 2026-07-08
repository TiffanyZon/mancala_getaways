// Hero reveal
const heroContent = document.getElementById("heroContent");

setTimeout(() => {
  heroContent.classList.add("visible");
  document.getElementById("heroBg").classList.add("loaded");
}, 150);

// Navbar background on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("visible");
    }
  });
};

const journeyToggles = document.querySelectorAll(".journey-toggle");

journeyToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest(".journey-row");
    row.classList.toggle("active");
  });
});

revealOnScroll();

// Run on scroll
window.addEventListener("scroll", revealOnScroll);
