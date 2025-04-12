import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Free music tracks from Pixabay (royalty-free)
  const tracks = [
    {
      name: "Digital Technology",
      url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_dc9f0cbeac.mp3?filename=digital-technology-126919.mp3",
    },
    {
      name: "Ambient Technology",
      url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-technology-11252.mp3",
    },
    {
      name: "Tech Background",
      url: "https://cdn.pixabay.com/download/audio/2021/11/23/audio_5ce29f53d7.mp3?filename=tech-background-10745.mp3",
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted, volume, currentTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleTrackEnd = () => {
    // Play next track when current one ends
    setCurrentTrack((currentTrack + 1) % tracks.length);
  };

  return (
    <div className="music-controls">
      <audio 
        ref={audioRef}
        src={tracks[currentTrack].url}
        onEnded={handleTrackEnd}
        loop={false}
      />
      
      <button 
        onClick={togglePlay}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
      
      <div className="hidden sm:flex items-center space-x-2">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-1 bg-muted rounded-full appearance-none cursor-pointer"
          aria-label="Volume control"
        />
        
        <button 
          onClick={toggleMute}
          className="text-foreground/80 hover:text-primary transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
      
      <div className="text-xs text-foreground/60 hidden sm:block">
        {tracks[currentTrack].name}
      </div>
    </div>
  );
};

export default MusicPlayer;
