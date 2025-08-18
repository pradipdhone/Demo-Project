import React, { useState } from 'react';

export default function SingleMeditation({ meditation }) {
  const [showVideo, setShowVideo] = useState(false);
  

  return (
    <>
      <button
        type='button'
        className="course-card"
        onClick={() => setShowVideo(true)} // Open video modal
      >
        {/* Image with "free/paid" tag */}
        <div className="card-image-container">
          <img className="card-image" src={`https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_development/${meditation.thumbnail}`} alt={meditation.title} />
        </div>

        {/* Title */}
        <h5 className="course-title">{meditation.title.length > 40 ? meditation.title.slice(0, 40) + "..." : meditation.title}</h5>

        {/* Button */}
        <div className="button-container">
          <button className="view-button">View Meditation</button>
        </div>
      </button>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <span className="close" onClick={() => setShowVideo(false)} style={{color: "red"}}>×</span>
            <video width="100%" height="auto" controls autoPlay>
              <source src={`https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_development/${meditation.media}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
