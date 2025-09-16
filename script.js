const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

let isVisible = false;

// Reusable function to animate with class toggle
function animateElement(el, animationIn, animationOut) {
  el.classList.remove(animationIn, animationOut);

  if (!isVisible) {
    el.classList.remove('hidden');
    el.classList.add(animationIn);

    el.addEventListener('animationend', () => {
      el.classList.remove(animationIn);
    }, { once: true });
  } else {
    el.classList.add(animationOut);

    el.addEventListener('animationend', () => {
      el.classList.remove(animationOut);
      el.classList.add('hidden');
    }, { once: true });
  }

  isVisible = !isVisible;
}

// Event handler
animateBtn.addEventListener('click', () => {
  animateElement(box, 'fade-in', 'fade-out');
});
