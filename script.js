function clap() {
  const dora = document.getElementById("dora");
  dora.style.transform = "scale(1.2)";
  setTimeout(() => dora.style.transform = "scale(1)", 300);
  new Audio('assets/clap.mp3').play();
}

function stomp() {
  const paw = document.getElementById("paw");
  paw.style.transform = "rotate(-10deg)";
  setTimeout(() => paw.style.transform = "rotate(0deg)", 300);
  new Audio('assets/stomp.mp3').play();
}

function hooray() {
  alert("🎉 Hooray!");
  new Audio('assets/hooray.mp3').play();
}
