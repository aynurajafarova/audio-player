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

let song = new Audio();
let currentSong = 0;

function playSong() {
  song.src = songs[currentSong].songSrc;
  songName.textContent = songs[currentSong].songName;
  artistName.textContent = songs[currentSong].artistName;
  poster.src = songs[currentSong].poster;
  backgroundImg.style.backgroundImage = `url(${songs[currentSong].backgroundImg})`;
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

// progress bar
song.addEventListener("timeupdate", () => {
  let fill = song.currentTime / song.duration;
  //   console.log("song.currentTime + " + song.currentTime);
  //   console.log("song.duration + " + song.duration);
  fillBar.style.width = fill * 100 + "%";
  if (fillBar.style.width == 100) {
    playBtn.classList.remove("icon-pause-solid");
    playBtn.classList.add("icon-play-solid");
    fillBar.style.width = 0 + "%";
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
nextBtn.addEventListener("click", () => {
  currentSong++;
  currentSong >= songs.length ? (currentSong = 0) : null;
  playSong();
  togglePlayPauseBtns();
});

// previous song button
prevBtn.addEventListener("click", () => {
  currentSong--;
  currentSong < 0 ? (currentSong = songs.length) : null;
  playSong();
  togglePlayPauseBtns();
});
