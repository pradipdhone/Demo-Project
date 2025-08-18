import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
import '../App.css'
import JourneyMeditations from "./JourneyMeditations";
import JourneyCourse from "./JourneyCourse";
import meditationsData from '../meditation.json';

export default function Journey() {

    const navigate = useNavigate();
    const [meditationCount, setMeditationCount] = useState(10)
    const [courseCount, setCourseCount] = useState(0)
    const [meditations, setMeditations] = useState([])
    const [courses, setCourses] = useState([])
    const [isMeditationClicked, setIsMeditationClicked] = useState(false)
    const [isCourseClicked, setIsCourseClicked] = useState(false)

  const handleClicked = () => {
    navigate(-1)
  }

  const handleMeditationClicked = () => {
    setIsMeditationClicked(true)
    setIsCourseClicked(false)
    setMeditations(meditationsData.result)
    setMeditationCount(meditationsData.completed_meditation_count || 0)
    setCourseCount(meditationsData.completed_course_count || 0)
  }

  useEffect(() => {
    setIsMeditationClicked(true)
    setMeditations(meditationsData.result)
    setMeditationCount(meditationsData.completed_meditation_count || 0)
    setCourseCount(meditationsData.completed_course_count || 0)
  }, [])

  const handleCourseClicked = () => {
    setIsMeditationClicked(false)
    setIsCourseClicked(true)
  }

  return (
    <>
 <div className="header">
  <div
    className="journey_header my-4"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      marginLeft: '10%'
    }}
  >
    {/* Back Icon - left */}
    <IconButton
      onClick={handleClicked}
      sx={{
        backgroundColor: "#E82E01",
        color: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        padding: "10px",
        "&:hover": {
          backgroundColor: "#E82E01",
        },
      }}
    >
      <ArrowBackIcon />
    </IconButton>

    {/* Center Title */}
    <h4
      style={{
        position: "absolute",
        left: "45%",
        transform: "translateX(-50%)",
        margin: 0,
      }}
    >
      <b>My Journey</b>
    </h4>

    {/* Placeholder for right side to balance spacing */}
    <div style={{ width: "50px" }}></div>
  </div>
  <hr className="custom-hr-white"/>
  <div className="journey_profile_div d-flex justify-content-between my-4">
            <button type="button" onClick={handleMeditationClicked} className="journey_div_first" style={{
                backgroundColor: isMeditationClicked ? '#E82E01': 'rgba(182, 179, 179, 0.5)'
            }}>
            <p className="count_journey"><b>{meditationCount}</b></p>
              <h6 className="journey_heading mx-2 my-2" style={{
                fontSize: '20px'
              }}>
                Completed Meditation
              </h6>
              
            </button>

            {/* Private Chats */}
            <button type="button" onClick={handleCourseClicked} className="journey_div_second" style={{
                backgroundColor: isCourseClicked ? '#E82E01': 'rgba(182, 179, 179, 0.5)'
            }}>
            <p className="count_journey"><b>{courseCount}</b></p>
              <h6 className="journey_heading my-2 mx-2" style={{
                fontSize: '20px'
              }}>
                <b>My Courses</b>
              </h6>
              
            </button>
    </div>

    {isMeditationClicked && <JourneyMeditations meditations={meditations}/>}
    {isCourseClicked && <JourneyCourse courses={meditations} />}

</div>

    </>
  );
}
