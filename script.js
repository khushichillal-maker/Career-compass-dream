// 1. TYPING GLITCH TITLE EFFECT
const title = document.getElementById('main-title');
const text = "CAREER COMPASS AI";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    title.innerHTML = text.substring(0, i+1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeWriter, 80);
  } else {
    title.innerHTML = text;
    startGlitch();
  }
}
typeWriter();

// Random glitch effect
function startGlitch() {
  setInterval(() => {
    title.style.textShadow = `0 0 20px #FF00E5, ${Math.random()*10-5}px 0 #00F5FF`;
    setTimeout(() => { 
      title.style.textShadow = '0 0 30px rgba(255, 0, 229, 0.5)'; 
    }, 100);
  }, 4000);
}

// 2. NEON CURSOR FOLLOW
const cursor = document.querySelector('.neon-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top = e.clientY - 10 + 'px';
});

// Cursor grow on hover
document.querySelectorAll('a, button, .step').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
  });
});

// 3. AI STATUS CHANGE WHEN CHATBOT LOADS
const iframe = document.querySelector('.chatbot-frame');
const status = document.getElementById('ai-status');

iframe.onload = function() {
  status.innerHTML = 'AI STATUS: ONLINE';
  status.style.color = '#00F5FF';
  status.style.textShadow = '0 0 10px #00F5FF';
}
