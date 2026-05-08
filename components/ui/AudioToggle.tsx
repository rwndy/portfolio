import Image from "next/image";
import { useState, useRef } from "react";

export function AudioToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.play();
      setIsMuted(false);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsMuted(true);
    }
  };

  return (
    <>
      <button
        onClick={toggleSound}
        className="fixed top-10 right-7 z-300 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        aria-label={isMuted ? "Unmute sound" : "Mute sound"}
        title="Icons by https://www.flaticon.com/free-icons/pixel"
      >
        <Image
          src={isMuted ? "/pixel--sound-mute-solid.svg" : "/pixel--sound-on-solid.svg"}
          alt={isMuted ? "Muted" : "Sound on"}
          width={32}
          height={32}
          className="text-white"
          loading="eager"
        />
      </button>
      <audio ref={audioRef} src="/game-start.wav" loop aria-hidden="true" />
    </>
  );
}
