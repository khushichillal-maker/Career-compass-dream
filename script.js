// Click sparkle effect
document.addEventListener('click', (e) => {
  const sparkle = document.createElement('div');
  sparkle.innerHTML = '✨';
  sparkle.style.position = 'absolute';
  sparkle.style.left = e.pageX + 'px';
  sparkle.style.top = e.pageY + 'px';
  sparkle.style.fontSize = '18px';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.animation = 'fadeUp 1s forwards';
  sparkle.style.zIndex = '9999';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

// Add fadeUp animation
const style = document.createElement('style');
style.innerHTML = `@keyframes fadeUp { from {opacity:1; transform: translateY(0);} to {opacity:0; transform: translateY(-30px);} }`;
document.head.appendChild(style);
