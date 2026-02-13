const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const noModal = document.getElementById('no-modal');
const modalContent = document.getElementById('modal-content');
const modalYesBtn = document.getElementById('modal-yes-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');
const celebration = document.getElementById('celebration');

// Function to trigger celebration
const celebrate = () => {
  window.location.href = "yes.html";
};

yesBtn.addEventListener('click', celebrate);
modalYesBtn.addEventListener('click', () => {
  noModal.classList.add('hidden');
  noModal.classList.remove('flex');
  celebrate();
});

// Image cycling logic
const images = [
  "images/cat_crying/5228_cat_cri.gif",
  "images/cat_crying/cat-crying.gif",
  "images/cat_crying/crycat-crying-cat.gif",
  "images/cat_crying/giphy.gif",
  "images/cat_crying/tenor2.gif",
  "images/cat_crying/tenor.gif"
];
let imageIndex = 0;

// Show the 'No' modal
noBtn.addEventListener('click', () => {
  // Cycle image
  const imgElement = modalContent.querySelector('img');
  imgElement.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;

  noModal.classList.remove('hidden');
  noModal.classList.add('flex');
  // Small timeout to allow transition
  setTimeout(() => {
    noModal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-90');
    modalContent.classList.add('scale-100');
  }, 10);
});

// Close modal logic (optional, if they really want to say no)
// Close modal logic (optional, if they really want to say no)
modalCloseBtn.addEventListener('click', () => {
  // Instead of closing, cycle to the next crying cat image
  const imgElement = modalContent.querySelector('img');
  imgElement.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
});

// Close modal on outside click
noModal.addEventListener('click', (e) => {
  if (e.target === noModal) {
    noModal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-90');
    setTimeout(() => {
      noModal.classList.add('hidden');
      noModal.classList.remove('flex');
    }, 300);
  }
});

// Simple JS Confetti
function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.innerText = ['❤️', '💖', '🥰', '🎉', '🌹'][Math.floor(Math.random() * 5)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10vh';
    confetti.style.fontSize = Math.random() * 20 + 20 + 'px';
    confetti.style.zIndex = 100;
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    document.body.appendChild(confetti);

    // Clean up
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add styles for confetti animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(110vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);
