const surpriseBtn = document.getElementById('surpriseBtn');
const confettiLayer = document.getElementById('confettiLayer');

const colors = ['#f7d76d', '#ff718d', '#6ae4d5', '#8cb8ff', '#b4ff8c'];

function burstConfetti() {
  const fragmentCount = 70;

  for (let index = 0; index < fragmentCount; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 260}px`);
    piece.style.animationDuration = `${Math.random() * 1.7 + 2.4}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiLayer.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);
  }
}

surpriseBtn.addEventListener('click', () => {
  burstConfetti();

  const title = document.querySelector('.hero-copy h1');
  title.textContent = 'Nakul, you are a legend!';

  const subtitle = document.querySelector('.subtitle');
  subtitle.textContent = 'May every dream you chase be bigger than the last one — and every celebration be unforgettable.';

  surpriseBtn.textContent = 'Birthday unlocked';
  surpriseBtn.disabled = true;
  surpriseBtn.style.opacity = '0.8';
  surpriseBtn.style.cursor = 'default';
});

window.addEventListener('load', () => {
  burstConfetti();
});

