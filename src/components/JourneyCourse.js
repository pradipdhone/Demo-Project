import React, { useEffect, useState } from "react";
import Course from "./Course";
import coursesData from '../courses.json'

export default function JourneyCourse(props) {
  const [inProgress, setInProgress] = useState(false);
  const [notStarted, setNotStarted] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [courses, setCourses] = useState([])

  const handleInProgressClicked = () => {
    setInProgress(true);
    setNotStarted(false);
    setCompleted(false);
    let courses = coursesData.filter(course => course.status === "in_progress")
    setCourses(courses)
  };

  const handleNotStartedClicked = () => {
    setNotStarted(true);
    setInProgress(false);
    setCompleted(false);
    let courses = coursesData.filter(course => course.status === "not_started")
    setCourses(courses)
  };

  const handleCompletedClicked = () => {
    setCompleted(true);
    setInProgress(false);
    setNotStarted(false);
    let courses = coursesData.filter(course => course.status === "completed")
    setCourses(courses)
  };

  useEffect(() => {
    let courses = coursesData.filter(course => course.status === "not_started")
    setCourses(courses)
  }, [])

  return (
    <>
      {/* Tabs */}
      <div className="course_profile_div d-flex justify-content-between">
        <button
          onClick={handleNotStartedClicked}
          className="course_profile_div_first d-flex"
          style={{
            backgroundColor: notStarted ? "#E82E01" : "#0b0605",
          }}
        >
          <h6 className="bottom_heading mb-0">
            <b>Not Started</b>
          </h6>
        </button>

        <button
          onClick={handleInProgressClicked}
          className="course_profile_div_second d-flex"
          style={{
            backgroundColor: inProgress ? "#E82E01" : "#0b0605",
          }}
        >
          <h6 className="bottom_heading my-3 mx-3">
            <b>In Progress</b>
          </h6>
        </button>

        <button
          onClick={handleCompletedClicked}
          className="course_profile_div_third d-flex"
          style={{
            backgroundColor: completed ? "#E82E01" : "#0b0605",
          }}
        >
          <h6 className="bottom_heading my-3 mx-3">
            <b>Completed</b>
          </h6>
        </button>
      </div>

      {/* Courses Grid */}
      <div
        className="course_data_profile my-3 d-flex flex-wrap"
        style={{ gap: "20px" }}
      >
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <div
              key={index}
              className="course-wrapper"
              style={{
                width: "calc(25% - 15px)", // 4 per row with gap
                minWidth: "200px", // ensure minimum width
              }}
            >
              <Course key={course._id} course={course} />
            </div>
          ))
        ) : (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // or fixed height like "200px"
            width: "100%"
          }}>
            <h4 className="my-3" style={{ color: "#E82E01" }}>
              No courses available
            </h4>
          </div>
        )}
      </div>
    </>
  );
}
