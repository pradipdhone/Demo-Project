import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [aboutMe, setAboutMe] = useState(
    "As a Super Admin, I take pride in maintaining the integrity of the system and ensuring user access is efficiently managed. My role involves configuring and optimizing workflows, managing permissions, and overseeing daily operations to keep everything running smoothly. I am always ready to collaborate with teams and users, offering support whenever needed."
  );
  const [profession, setProfession] = useState("Director");
  const [isChanged, setIsChanged] = useState(false);

  const handleClicked = () => {
    navigate(-1);
  };

  const handleSave = () => {
    console.log("Saving changes:", { aboutMe, profession });
    setIsChanged(false);
    // Here you can call an API to update user profile data
  };

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
            marginLeft: "10%",
          }}
        >
          {/* Back Icon */}
          <IconButton
            onClick={handleClicked}
            sx={{
              backgroundColor: "#E82E01",
              color: "white",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
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
            <b>Profile</b>
          </h4>
        </div>
        <div className="profile-card-container">
        <div className="profile-card">
          {/* Banner */}
          <div className="banner-container">
            <img
              className="banner-img my-3"
              src="https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_mof/profiles/background/67b5e9eb080e0ad90f1afd86.jpeg"
              alt="Banner"
            />
            <button className="edit-banner-btn">
              <EditIcon />
            </button>

            {/* Profile Picture */}
            <div className="profile-pic-container">
              <img
                className="profile-pic"
                src="https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_mof/profiles/67b5e9eb080e0ad90f1afd86.jpeg"
                alt="Profile"
              />
              <button className="edit-pic-btn">
                <EditIcon fontSize="small" />
              </button>
            </div>
          </div>

          {/* Name & Email */}
          <div className="profile-info">
            <h3 style={{ color: "black", fontSize: "18px" }}>Super Admin</h3>
            <p className="email">
              <span>📧</span> superadmin@mof.com
            </p>
          </div>

          {/* About Me */}
          <div className="profile-section">
            <h4 style={{ color: "black", fontSize: "18px",  textAlign: 'start', paddingLeft: '20px'}}>
              About Me
            </h4>
            <textarea
              className="section-box"
              style={{ color: "black", minHeight: "120px" }}
              value={aboutMe}
              onChange={(e) => {
                setAboutMe(e.target.value);
                setIsChanged(true);
              }}
            />
          </div>

          {/* Profession */}
          <div className="profile-section">
            <h4 style={{ color: "black", textAlign: "start", fontSize: "18px",  textAlign: 'start', paddingLeft: '20px' }}>
              My Profession
            </h4>
            <input
              type="text"
              className="section-box"
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
                setIsChanged(true);
              }}
            />
          </div>

          {/* Save Button */}
          <div className="save-container">
            <button
              className="save-btn"
              onClick={handleSave}
              disabled={!isChanged}
              style={{
                background: isChanged ? "#E82E01" : "gray",
                cursor: isChanged ? "pointer" : "not-allowed",
              }}
            >
              Save
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
