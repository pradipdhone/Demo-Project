import React, { useState } from "react";

export default function Meditation({ meditation }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <button
        type="button"
        className="journey_meditation d-flex align-items-center"
        style={{
          display: "flex",
          alignItems: "center", // vertically center content inside button
          padding: "6px 6px",
        }}
        onClick={() => setShowVideo(true)}
      >
        {/* Left-side image */}
        <img
          className="meditation_journey_img"
          src={
            meditation.thumbnail
              ? `https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_development/${meditation.thumbnail}`
              : "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1492680652.jpg?c=16x9&q=w_800,c_fill"
          }
          alt="Meditation Thumbnail"
        />

        {/* Title + description stacked vertically */}
        <div className="d-flex flex-column mx-4 text-start">
          <h2 style={{ fontSize: "20px", margin: 0 }}>
            <b>{meditation.title}</b>
          </h2>
          <h2 style={{ fontSize: "18px", margin: 0 }}>
            {meditation.description}
          </h2>
        </div>
      </button>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <span
              className="close"
              onClick={() => setShowVideo(false)}
              style={{ color: "red" }}
            >
              ×
            </span>
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
