import React, { useState, useEffect } from 'react';

interface EventCoverProps {
  coverUrl: string;
  eventName: string;
}

const EventCover: React.FC<EventCoverProps> = ({ coverUrl, eventName }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
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
  
  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = imageSrc;
  }, [imageSrc]);
  
  return (
    <div className="cover-with-glow flex-center-center">
      <div className="cover-image-wrapper flex-center-center">
        <div 
          style={{ paddingBottom: '100.0%' }} 
          className="img-aspect-ratio cover-image rectangle"
        >
          {/* Loading placeholder */}
          {!imageLoaded && !imageError && (
            <div className="image-loading-placeholder">
              <div className="loading-spinner"></div>
              <p>Loading event poster...</p>
            </div>
          )}
          
          {/* Error state */}
          {imageError && (
            <div className="image-error-placeholder">
              <div className="error-icon">📷</div>
              <p>Failed to load image</p>
            </div>
          )}
          
          {/* Actual image */}
          <img 
            src={imageSrc} 
            alt={`Cover Image for ${eventName}`} 
            loading="eager"
            className={`cover-image-main ${imageLoaded ? 'loaded' : 'loading'}`}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCover;
