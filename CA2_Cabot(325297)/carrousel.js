document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector("[data-track]");
  const slides = Array.from(track.querySelectorAll(".slide"));
  const btnPrev = carousel.querySelector("[data-prev]");
  const btnNext = carousel.querySelector("[data-next]");

  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  btnNext.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    update();
  });

  btnPrev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  update();
});
