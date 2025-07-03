/* Utility: play short SFX and give quick visual feedback */
function flash(button) {
  button.style.transform = "scale(1.15)";
  setTimeout(() => button.style.transform = "scale(1)", 200);
}

function playClap() {
  flash(document.querySelectorAll(".buttons button")[0]);
  new Audio('assets/boy_clap.mp3').play();
}

function playStomp() {
  flash(document.querySelectorAll(".buttons button")[1]);
  new Audio('assets/boy_stomp.mp3').play();
}

function playHooray() {
  flash(document.querySelectorAll(".buttons button")[2]);
  new Audio('assets/boy_hooray.mp3').play();
}

function doAll() {
  flash(document.querySelector(".buttons button.all"));
  /* One combined recording keeps everything in sync */
  new Audio('assets/boy_all.mp3').play();
}
