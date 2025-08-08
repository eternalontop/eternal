const music = document.getElementById('background-music');
const welcomeScreen = document.getElementById('welcome-screen');
const btnMusic = document.getElementById('enter-with-music');
const btnSilence = document.getElementById('enter-silently');

function enterSiteAnimation() {
  welcomeScreen.style.transition = 'opacity 1s ease';
  welcomeScreen.style.opacity = 0;

  setTimeout(() => {
    welcomeScreen.style.display = 'none';

    // Activar AOS después de entrar
    AOS.init();
  }, 1000);
}

btnMusic.addEventListener('click', () => {
  music.volume = 0.5;
  music.play().catch(err => console.log("Autoplay bloqueado:", err));
  enterSiteAnimation();
});

btnSilence.addEventListener('click', () => {
  music.volume = 0;
  music.play().catch(err => console.log("Autoplay bloqueado:", err));
  enterSiteAnimation();
});
