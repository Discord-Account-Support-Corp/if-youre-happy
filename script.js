function playVideo(action) {
  // Hide all videos first
  document.querySelectorAll(".action-video").forEach(v => {
    v.pause();
    v.currentTime = 0;
    v.style.display = "none";
  });

  // Show and play the chosen one
  let video = document.getElementById("video-" + action);
  if (video) {
    video.style.display = "block";
    video.play();
  }
}
