'use client'
import React from "react";

const VideoBackground = () => {
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover opacity-100"
      >
        <source src="/video/video.webm" type="video/webm" />
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>
  );
};

export default VideoBackground;
