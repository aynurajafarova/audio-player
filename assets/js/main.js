// an array of songs
let songs = [
  {
    artistName: "AC/DC ",
    songSrc: "/assets/songs/Back-In-Black.mp3",
    songName: "Back In Black",
    poster: "/assets/images/back-in-black.jpg",
    backgroundImg: "/assets/images/back-in-black.jpg",
  },
  {
    artistName: "Led Zeppelin",
    songSrc: "/assets/songs/Whole-Lotta-Love.mp3",
    songName: "Whole Lotta Love",
    poster: "/assets/images/Whole-Lotta-Love.jpg",
    backgroundImg: "/assets/images/Whole-Lotta-Love.jpg",
  },
  {
    artistName: "Irish Coffee",
    songSrc: "/assets/songs/Irish-Coffee-A-Day-Like-Today.mp3",
    songName: "A Day Like Today",
    poster: "/assets/images/Irish-Coffee-A-Day-Like-Today.jpg",
    backgroundImg: "/assets/images/Irish-Coffee-A-Day-Like-Today.jpg",
  },
  {
    artistName: "Primal Scream",
    songSrc: "/assets/songs/Primal-Scream-Loaded.mp3",
    songName: "Loaded",
    poster: "/assets/images/Primal-Scream-Loaded.jpg",
    backgroundImg: "/assets/images/Primal-Scream-Loaded.jpg",
  },
];

let songName = document.getElementById("songsName");
let artistName = document.getElementById("artistsName");
let poster = document.getElementById("songImg");
let fillBar = document.getElementById("fill");
let backgroundImg = document.getElementById("backgroundImg");

let playBtn = document.querySelector(".icon-play-solid");
let pauseBtn = document.querySelector(".icon-pause-solid");

let song = new Audio();
let currentSong = 0;

function playSong() {
  song.src = songs[currentSong].songSrc;
  songName.textContent = songs[currentSong].songName;
  artistName.textContent = songs[currentSong].artistName;
  poster.src = songs[currentSong].poster;
  backgroundImg.style.backgroundImage = `url(${songs[currentSong].backgroundImg})`;
  song.play(); // play the song
  if (song.play) {
    playBtn.classList.remove("icon-play-solid");
    playBtn.classList.add("icon-pause-solid");
    playBtn.classList.add("active-btn");
  }
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
