import React from 'react';

interface EventCoverProps {
  coverUrl: string;
  eventName: string;
}

const EventCover: React.FC<EventCoverProps> = ({ coverUrl, eventName }) => {
  // Use require for the image to avoid TypeScript module resolution issues
  const getImageSrc = (url: string) => {
    if (url === 'images/cover-image.png') {
      try {
        return require('../images/cover-image.png');
      } catch (e) {
        return url;
      }
    }
    return url;
  };
  
  const imageSrc = getImageSrc(coverUrl);
  
  return (
    <div className="cover-with-glow flex-center-center">
      <div className="cover-image-wrapper flex-center-center">
        <div 
          style={{ paddingBottom: '100.0%' }} 
          className="img-aspect-ratio cover-image rectangle"
        >
          <img 
            src={imageSrc} 
            alt={`Cover Image for ${eventName}`} 
            loading="eager"
            className="cover-image-main"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCover;
