let progress = document.getElementById('progress');
let song = document.getElementById('song');
let playButton = document.getElementById("js-play-Button");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause() {
  if (playButton.classList.contains("fa-pause")) {
    song.pause();
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
  }
  else {
    song.play();
    playButton.classList.add("fa-pause");
    playButton.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  playButton.classList.add("fa-pause");
  playButton.classList.remove("fa-play");
}