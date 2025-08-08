document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-settings');
  const modal = document.getElementById('settings-panel');
  const closeBtn = document.getElementById('close-settings');
  const musicBtn = document.getElementById('toggle-music');
  const themeBtn = document.getElementById('toggle-theme');
  const music = document.getElementById('background-music');

  // --- Sincronizar estado inicial de música y tema ---
  let musicEnabled = localStorage.getItem('music-enabled');
  if (musicEnabled === null) {
    // Si nunca se ha definido, detecta por volumen
    musicEnabled = (music && music.volume > 0) ? "true" : "false";
  }
  if (music) {
    if (musicEnabled === "true") {
      music.volume = 0.5;
      setTimeout(() => music.play().catch(()=>{}), 300);
      if (musicBtn) musicBtn.innerHTML = '<i class="fas fa-music"></i> Música';
    } else {
      music.volume = 0;
      if (musicBtn) musicBtn.innerHTML = '<i class="fas fa-music-slash"></i> Música';
    }
  }

  let darkMode = localStorage.getItem('dark-mode');
  if (darkMode === "false") {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
  }

  // --- Modal configuración ---
  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('open');
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  // --- Música ON/OFF ---
if (musicBtn && music) {
  musicBtn.addEventListener('click', () => {
    if (music.volume > 0) {
      music.volume = 0;
      musicBtn.innerHTML = '<span class="music-icon-wrap"><i class="fas fa-music"></i><span class="music-off-slash"></span></span> Música';
      localStorage.setItem('music-enabled', 'false');
    } else {
      music.volume = 0.5;
      music.play().catch(()=>{});
      musicBtn.innerHTML = '<span class="music-icon-wrap"><i class="fas fa-music"></i></span> Música';
      localStorage.setItem('music-enabled', 'true');
    }
  });
  // Estado inicial
  if (music.volume > 0) {
    musicBtn.innerHTML = '<span class="music-icon-wrap"><i class="fas fa-music"></i></span> Música';
  } else {
    musicBtn.innerHTML = '<span class="music-icon-wrap"><i class="fas fa-music"></i><span class="music-off-slash"></span></span> Música';
  }
}

  // --- Tema claro/oscuro ---
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      if (isDark) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        localStorage.setItem('dark-mode', 'false');
      } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
        localStorage.setItem('dark-mode', 'true');
      }
    });
  }
});
