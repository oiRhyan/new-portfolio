'use client'
import { useEffect, useRef } from 'react';

type Props = {
    src : any
}

const BackgroundSound = ({ src } : Props) => {
  const audioRef = useRef<HTMLAudioElement>(src);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.loop;
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={src} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundSound;
