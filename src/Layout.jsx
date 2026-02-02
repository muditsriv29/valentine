import { useState } from "react";

export default function Layout({ children }) {
  const [musicStarted, setMusicStarted] = useState(false);

  const startMusic = () => {
    if (musicStarted) return;

    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.currentTime = 20;
      audio.volume = 0.6;
      audio.play();
      setMusicStarted(true);
    }
  };

  return (
    <div onClick={startMusic}>
      {children}

      {/* 🎵 GLOBAL Background Music */}
      <audio
        id="bg-music"
        src="https://res.cloudinary.com/dyzxm2ubv/video/upload/v1770006887/Daniel_Caesar_H.E.R._-_Best_Part_a_Visual_wit4rk.mp3"
        loop
      />
    </div>
  );
}
