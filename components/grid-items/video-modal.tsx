import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  isMuted: boolean;
  onToggleMute: () => void;
}

const VideoModal = ({ isOpen, onClose, videoSrc, isMuted, onToggleMute }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative max-w-4xl w-full mx-4 aspect-video">
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <video
          className="w-full h-full rounded-lg"
          src={videoSrc}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          controls
        />
        
        <button
          onClick={onToggleMute}
          className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
