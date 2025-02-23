const music = document.getElementById("bg-music");
const playPauseBtn = document.getElementById("play-pause");
const icon = playPauseBtn.querySelector("i");

// playPauseBtn.addEventListener("click", () => {
//   if (music.paused) {
//     music.play().catch(error => console.log("Erreur de lecture:", error));
//     icon.classList.remove("fa-play");
//     icon.classList.add("fa-pause");
//   } else {
//     music.pause();
//     icon.classList.remove("fa-pause");
//     icon.classList.add("fa-play");
//   }
// });

playPauseBtn.addEventListener("click", () => {
  checkAudioPermission();
  if (music.paused) {
    music.play()
      .then(() => {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
      })
      .catch(error => console.error("🔴 Erreur de lecture :", error));
  } else {
    music.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//     const music = document.getElementById("bg-music");
//     const playPauseBtn = document.getElementById("play-pause");
//     const icon = playPauseBtn.querySelector("i");
  
//     if (!music) {
//       console.error("🎵 L'élément audio n'a pas été trouvé !");
//       return;
//     }
  
//     playPauseBtn.addEventListener("click", () => {
//       if (music.paused) {
//         music.play().then(() => {
//           icon.classList.remove("fa-play");
//           icon.classList.add("fa-pause");
//         }).catch(error => console.error("🔴 Erreur de lecture :", error));
//       } else {
//         music.pause();
//         icon.classList.remove("fa-pause");
//         icon.classList.add("fa-play");
//       }
//     });
//   });
  