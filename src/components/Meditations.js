import React, { useEffect, useState } from "react";
import { IconButton, InputBase } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import meditationData from '../meditation.json'
import SingleMeditation from "./SingleMeditation";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function Meditations() {

    const navigate = useNavigate();
    const [meditations, setMeditations] = useState([])
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleClicked = () => {
        navigate(-1)
      }

      useEffect(() => {
        console.log("meditationData", meditationData)
        setMeditations(meditationData.result)
      }, [])

      const filteredMeditations = meditations.filter(meditation =>
        meditation.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

console.log("filteredMeditations", filteredMeditations)
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
      <b>Meditations</b>
    </h4>

    {/* Placeholder for right side to balance spacing */}
    <div style={{ display: "flex", alignItems: "center" }}>
            {searchOpen && (
              <InputBase
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "2px 10px",
                  marginRight: "0px",
                  width: "200px",
                  transition: "width 0.3s ease",
                }}
              />
            )}
            <IconButton
              onClick={() => {
                if (searchOpen) {
                  setSearchQuery("");
                }
                setSearchOpen((prev) => !prev);
              }}
              sx={{
                color: "white",
                borderRadius: "50%",
                marginRight: "140px",
                width: "40px",
                height: "40px"
              }}
            >
              {searchOpen ? <CloseIcon /> : <SearchIcon />}
            </IconButton>
          </div>
  </div>
  <hr className="custom-hr-white"/>

  <div
        className="course_data_profile my-3 d-flex flex-wrap"
        style={{ gap: "20px" }}
      >
        {filteredMeditations && filteredMeditations.length > 0 ? (
          filteredMeditations.map((meditation, index) => (
            <div
              key={index}
              className="course-wrapper"
              style={{
                width: "calc(25% - 15px)", // 4 per row with gap
                minWidth: "200px", // ensure minimum width
              }}
            >
              <SingleMeditation key={meditation._id} meditation={meditation} />
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
              No meditations available
            </h4>
          </div>
        )}
      </div>
  </div>
      
    </>
  )
}
