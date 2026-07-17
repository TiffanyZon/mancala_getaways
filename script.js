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
const activitySlider = document.querySelector(".activity-slider");

if (activitySlider) {
  const track = activitySlider.querySelector(".activity-slider__track");
  const slides = [...activitySlider.querySelectorAll(".activity-slide")];
  const previousButton = activitySlider.querySelector(
    ".activity-slider__arrow--previous",
  );
  const nextButton = activitySlider.querySelector(
    ".activity-slider__arrow--next",
  );
  const dots = [...activitySlider.querySelectorAll(".activity-slider__dot")];
  const currentNumber = activitySlider.querySelector(
    ".activity-slider__current",
  );

  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function updateSlider(newIndex) {
    currentSlide = (newIndex + slides.length) % slides.length;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      const isActive = index === currentSlide;

      slide.classList.toggle("is-active", isActive);

      if (!video) return;

      if (isActive) {
        video.play().catch(() => {
          // Webbläsaren kan blockera autoplay i vissa situationer.
        });
      } else {
        video.pause();
      }
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentSlide);
    });

    currentNumber.textContent = String(currentSlide + 1).padStart(2, "0");
  }

  previousButton.addEventListener("click", () => {
    updateSlider(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    updateSlider(currentSlide + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateSlider(index);
    });
  });
  updateSlider(0);
}
revealOnScroll();

// Run on scroll
window.addEventListener("scroll", revealOnScroll);
