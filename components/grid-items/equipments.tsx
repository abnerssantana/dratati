import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { GridItemInterface } from '@/config/site-config';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  item: GridItemInterface;
}

const ImageComparison: React.FC<Props> = ({ item }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const images = Array.isArray(item.images) ? item.images.filter(Boolean) : [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setVisible(true);
        }, 500);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    // Desabilita o scroll quando expandido
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getContainerHeight = () => {
    switch (item.layout) {
      case '2x7':
        return 'h-[620px]';
      case '2x4':
        return 'h-[400px]';
      case '2x2':
        return 'h-[310px]';
      default:
        return 'h-full';
    }
  };

  const renderMedia = () => {
    const containerHeight = getContainerHeight();
    
    if (item.video) {
      return (
        <div className={`relative flex flex-col items-end justify-end w-full ${!isExpanded ? containerHeight : 'h-[80vh]'} overflow-hidden`}>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/98 to-neutral-950/99" />
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={item.video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
            </button>
            
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
            </button>
            
            <button
              onClick={toggleExpand}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isExpanded ? <Minimize2 size={20} className="text-white" /> : <Maximize2 size={20} className="text-white" />}
            </button>
          </div>
        </div>
      );
    } else if (images.length > 0 || item.image) {
      return (
        <div className={`relative w-full ${containerHeight}`}>
          <Image
            className={`absolute inset-0 object-cover transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            src={images.length > 0 ? images[imageIndex] : item.image || ''}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            quality={90}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {/* Card normal */}
      {!isExpanded && (
        <div className="flex flex-col w-full h-full overflow-hidden rounded-lg">
          {renderMedia()}
          <div className="relative z-20 w-full p-6 space-y-3 md:p-8 bg-white dark:bg-neutral-900">
            <div className="text-sm font-normal text-black dark:text-white">{item.title}</div>
            {item.equipments && item.equipments.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {item.equipments.map((equipment, index) => (
                  <div
                    className="px-2 py-1 text-sm font-normal bg-gray-200 rounded-lg dark:bg-neutral-700"
                    key={index}
                  >
                    {equipment.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Card expandido */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100]"
              onClick={toggleExpand}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-4 z-[110] flex flex-col overflow-hidden rounded-lg bg-white dark:bg-neutral-900"
            >
              {renderMedia()}
              <div className="relative z-20 w-full p-6 space-y-3 md:p-8 bg-white dark:bg-neutral-900">
                <div className="text-sm font-normal text-black dark:text-white">{item.title}</div>
                {item.equipments && item.equipments.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3">
                    {item.equipments.map((equipment, index) => (
                      <div
                        className="px-2 py-1 text-sm font-normal bg-gray-200 rounded-lg dark:bg-neutral-700"
                        key={index}
                      >
                        {equipment.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageComparison;