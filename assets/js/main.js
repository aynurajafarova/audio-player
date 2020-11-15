// an array of songs
let songs = [
  {
    artistName: "AC/DC ",
    songSrc: "./assets/songs/Back-In-Black.mp3",
    songName: "Back In Black",
    poster: "./assets/images/back-in-black.jpg",
    backgroundImg: "./assets/images/back-in-black.jpg",
  },
  {
    artistName: "Led Zeppelin",
    songSrc: "./assets/songs/Whole-Lotta-Love.mp3",
    songName: "Whole Lotta Love",
    poster: "./assets/images/Whole-Lotta-Love.jpg",
    backgroundImg: "./assets/images/Whole-Lotta-Love.jpg",
  },
  {
    artistName: "Irish Coffee",
    songSrc: "./assets/songs/Irish-Coffee-A-Day-Like-Today.mp3",
    songName: "A Day Like Today",
    poster: "./assets/images/Irish-Coffee-A-Day-Like-Today.jpg",
    backgroundImg: "./assets/images/Irish-Coffee-A-Day-Like-Today.jpg",
  },
  {
    artistName: "Primal Scream",
    songSrc: "./assets/songs/Primal-Scream-Loaded.mp3",
    songName: "Loaded",
    poster: "./assets/images/Primal-Scream-Loaded.jpg",
    backgroundImg: "./assets/images/Primal-Scream-Loaded.jpg",
  },
];

let songName = document.getElementById("songsName");
let artistName = document.getElementById("artistsName");
let poster = document.getElementById("songImg");
let fillBar = document.getElementById("fill");
let backgroundImg = document.getElementById("backgroundImg");

let playBtn = document.querySelector(".icon-play-solid");
let pauseBtn = document.querySelector(".icon-pause-solid");
let nextBtn = document.getElementById("forward");
let prevBtn = document.getElementById("backward");

let currentTime = document.getElementById("currentTime");
let totalTime = document.getElementById("totalTime");

let volumeUpBtn = document.getElementById("volumeUp");
let volumeDownBtn = document.getElementById("volumeDown");
let fillVolume = document.getElementById("fillVolume");
let volumeBtn = document.querySelector(".icon-volume-up-solid");

let repeatBtn = document.getElementById("repeat");

let song = new Audio();
let currentSong = 0;

function playSong() {
  song.src = songs[currentSong].songSrc;
  songName.textContent = songs[currentSong].songName;
  artistName.textContent = songs[currentSong].artistName;
  poster.src = songs[currentSong].poster;
  backgroundImg.style.backgroundImage = `url(${songs[currentSong].backgroundImg})`;
  fillVolume.style.width = song.volume * 100 + "%";
  song.play(); // play the song
}

window.onload = playSong;

// change the play button icon to the pause button icon
playBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playBtn.classList.remove("icon-play-solid");
    playBtn.classList.add("icon-pause-solid");
    playBtn.classList.add("active-btn");
  } else {
    song.pause();
    playBtn.classList.remove("icon-pause-solid");
    playBtn.classList.add("icon-play-solid");
  }
});

// current time
showCurrentTime = () => {
  let min = Math.floor(Math.round(song.currentTime) / 60);
  min = min < 10 ? "0" + min : min;
  let sec = Math.round(song.currentTime) % 60;
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.textContent = min + ":" + sec;
};

// total time
showTotalTime = () => {
  let min = Math.floor(Math.round(song.duration) / 60);
  min = min < 10 ? "0" + min : min;
  let sec = Math.round(song.duration) % 60;
  sec = sec < 10 ? "0" + sec : sec;
  if (song.duration) {
    totalTime.textContent = min + ":" + sec;
  }
};

playNextSong = () => {
  currentSong++;
  currentSong >= songs.length ? (currentSong = 0) : null;
  playSong();
  togglePlayPauseBtns();
};

// progress bar
song.addEventListener("timeupdate", () => {
    let fill = song.currentTime / song.duration;
    fillBar.style.width = fill * 100 + "%";
    if (fillBar.style.width == 100) {
      playBtn.classList.remove("icon-pause-solid");
      playBtn.classList.add("icon-play-solid");
      fillBar.style.width = 0 + "%";
    }
  showCurrentTime();
  showTotalTime();

  // play the next song when the current song is completed
  if (song.ended) {
    playNextSong();
  }
});

// play/pause btns
togglePlayPauseBtns = () => {
  if (song.played) {
    playBtn.classList.remove("icon-play-solid");
    playBtn.classList.add("icon-pause-solid");
    playBtn.classList.add("active-btn");
  }
};

// next song button
nextBtn.addEventListener("click", playNextSong);

// previous song button
prevBtn.addEventListener("click", () => {
  currentSong--;
  currentSong < 0 ? (currentSong = songs.length) : null;
  playSong();
  togglePlayPauseBtns();
});

// volume up/down
toggleVolumeBtn = () => {
  if (song.volume == 0) {
    volumeBtn.classList.remove("icon-volume-up-solid");
    volumeBtn.classList.add("icon-volume-mute-solid");
  } else if (song.volume > 0) {
    volumeBtn.classList.remove("icon-volume-mute-solid");
    volumeBtn.classList.add("icon-volume-up-solid");
  }
};

volumeUpBtn.addEventListener("click", () => {
  if (song.volume < 1) {
    song.volume += 0.125;
  }
  fillVolume.style.width = song.volume * 100 + "%";
  toggleVolumeBtn();
});

volumeDownBtn.addEventListener("click", () => {
  if (song.volume == 1 || song.volume > 0) song.volume -= 0.125;
  fillVolume.style.width = song.volume * 100 + "%";
  toggleVolumeBtn();
});

// mute volume
volumeBtn.addEventListener("click", () => {
  if (volumeBtn.classList.contains("icon-volume-up-solid")) {
    // song.volume == 1
    song.volume = 0;
    volumeBtn.classList.remove("icon-volume-up-solid");
    volumeBtn.classList.add("icon-volume-mute-solid");
    fillVolume.style.width = 0 + "%";
  } else {
    song.volume = 1;
    volumeBtn.classList.remove("icon-volume-mute-solid");
    volumeBtn.classList.add("icon-volume-up-solid");
    fillVolume.style.width = 100 + "%";
  }
});

// repeat song
repeatBtn.addEventListener("click", () => {
  if (song.loop) {
    song.loop = false;
    document.querySelector(".icon-redo-solid").classList.remove("active-btn");
  } else {
    song.loop = true;
    document.querySelector(".icon-redo-solid").classList.add("active-btn");
  }
});
