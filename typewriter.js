document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = Array.from(
    document.querySelectorAll("#sobremi .typewriter")
  );

  if (!paragraphs.length) return;

  setTimeout(() => {
    startSequence(paragraphs);
  }, 1200);
});

async function startSequence(elements) {
  for (const el of elements) {
    await typeText(el, 18);
    await wait(350);
  }
}

function typeText(el, speed) {
  return new Promise((resolve) => {
    const text = el.textContent.trim();
    el.textContent = "";

    // Mostrar recién cuando empieza su turno
    el.classList.add("is-active");

    let i = 0;
    function write() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(write, speed);
      } else {
        el.classList.add("is-done");
        resolve();
      }
    }

    write();
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
