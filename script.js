const scene = document.querySelector('.scene');
window.addEventListener('scroll', () => {
  const zMove = window.scrollY * -1; // invert for “forward” feel
  scene.style.transform = `translateZ(${zMove}px)`;
});