document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const playPauseBtn = document.getElementById("play-pause");
  const icon = playPauseBtn.querySelector("i");

  if (!music) {
    console.error("🎵 L'élément audio n'a pas été trouvé !");
    return;
  }

  playPauseBtn.addEventListener("click", () => {
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

  const enableMusic = () => {
    music.play()
      .then(() => {
        console.log("Musique démarrée !");
      })
      .catch(error => console.error("🔴 Erreur de lecture :", error));
  };

  document.addEventListener("click", enableMusic, { once: true });
  document.addEventListener("touchstart", enableMusic, { once: true });

  // const startFireworks = () => {
  //   const sevenSection = document.querySelector(".seven");
  //   if (sevenSection) {
  //     // Initialiser les feux d'artifice ici
  //     console.log("Feux d'artifice démarrés !");
  //     // Assure-toi que le script fireworks.js est correctement configuré
  //   }
  // };

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         startFireworks();
  //         observer.disconnect();
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.5,
  //   }
  // );

  // const sevenSection = document.querySelector(".seven");
  // if (sevenSection) {
  //   observer.observe(sevenSection);
  // }
});