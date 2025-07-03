/* ===== Utility helpers ===== */
function playSound(src) {
  const audio = new Audio(src);
  audio.play();
}

/* ===== Action buttons ===== */
const clapBtn   = document.getElementById('btnClap');
const stompBtn  = document.getElementById('btnStomp');
const hoorayBtn = document.getElementById('btnHooray');
const allBtn    = document.getElementById('btnAll');

clapBtn  .addEventListener('click', () => playSound('assets/boy_clap.mp3' ));
stompBtn .addEventListener('click', () => playSound('assets/boy_stomp.mp3'));
hoorayBtn.addEventListener('click', () => playSound('assets/boy_hooray.mp3'));
allBtn   .addEventListener('click', () => playSound('assets/boy_all.mp3'  ));

/* Keyboard activation (Enter/Space) is automatic for <button>,
   but we add down-arrow prompt for completeness */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') {
    allBtn.focus();
  }
});

/* ===== Music controls ===== */
const song     = document.getElementById('song');
const playBtn  = document.getElementById('playSong');
const pauseBtn = document.getElementById('pauseSong');

playBtn .addEventListener('click', () => song.play());
pauseBtn.addEventListener('click', () => song.pause());

/* Optional: announce to screen-reader when song starts/stops */
const live = document.createElement('div');
live.setAttribute('aria-live','polite');
live.className = 'sr-only';
document.body.append(live);
song.addEventListener('play',  () => live.textContent = 'Music playing');
song.addEventListener('pause', () => live.textContent = 'Music paused');
