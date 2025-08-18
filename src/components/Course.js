import React, { useState } from 'react';

export default function Course({ course }) {
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
          <img className="card-image" src={course.thumbnail} alt={course.title} />
          <span
            className={`badge ${course.type === "free" ? "free" : "paid"}`}
            style={{
              backgroundColor: course.type === "paid" ? 'red' : 'green'
            }}
          >
            {course.type}
          </span>
        </div>

        {/* Title */}
        <h5 className="course-title">{course.title.length > 40 ? course.title.slice(0, 40) + "..." : course.title}</h5>

        {/* Button */}
        <div className="button-container">
          <button className="view-button">View Course</button>
        </div>
      </button>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <span className="close" onClick={() => setShowVideo(false)} style={{color: "red"}}>×</span>
            <video width="100%" height="auto" controls autoPlay>
              <source src={course.mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
