// Hero reveal
const heroContent = document.getElementById("heroContent");

setTimeout(() => {
  heroContent.classList.add("visible");
  document.getElementById("heroBg").classList.add("loaded");
}, 150);

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});
window.addEventListener("scroll", () => {
  navToggle.classList.remove("open");
  navLinks.classList.remove("open");
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
