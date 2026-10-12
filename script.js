const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const buttons = document.querySelectorAll('.cta');
buttons.forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    const rect = button.getBoundingClientRect();
    button.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
    button.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
  });
});
