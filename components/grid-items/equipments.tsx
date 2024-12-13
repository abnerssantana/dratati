import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GridItemInterface } from '@/config/site-config';

interface Props {
  item: GridItemInterface;
}

const ImageComparison: React.FC<Props> = ({ item }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
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

  // Helper function to determine container height based on layout
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
        <div className={`relative flex flex-col items-end justify-end w-full ${containerHeight} overflow-hidden`}>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/98 to-neutral-950/99" />
          <video
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
          />
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
  );
};

export default ImageComparison;