import React, { useState, useEffect } from "react";
import "../App.css";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import groups from "../channel.json";
import personal from "../personal.json"
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const navigate = useNavigate();
  const [date, setDate] = useState(Date.now());
  const [group_chats, setGroupChats] = useState([]);
  const [personal_chats, setPersonalChats] = useState([]);

  const getCurrentFormattedDate = () => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  };

//   const fetchChats = async () => {
//     setGroupChats(groups);
//     setPersonalChats(personal);
//     console.log("group_chats", group_chats.length);
//     console.log("personal_chats", Array.isArray(group_chats) && group_chats.length > 0);
//   };

  useEffect(() => {
    const currentDate = getCurrentFormattedDate();
    setDate(currentDate);
    setGroupChats(groups);
    setPersonalChats(personal);
  }, []);

  const handleOnClick = () => {
    navigate('/my-journey')
  }

  const handleCourseClicked = () => {
    navigate('/courses')
  }

  const handleMeditationClicked = () => {
    navigate('/meditations')
  }

  return (
    <>
      <div className="main">
        <div className="header">
          <div className="container">
            <h6 className="dashboard_date">{date}</h6>
            <h4>You Matter Everyday</h4>
            <h6>Good Morning, Super</h6>
          </div>
          <button
            type="button"
            className="journey_div my-3 d-flex align-items-center justify-content-between"
            onClick={handleOnClick}
          >
            <div className="d-flex align-items-center">
              <img
                className="profile_image mx-4"
                src="https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_mof/profiles/67b5e9eb080e0ad90f1afd86.jpeg?v=1754391827139"
                alt="image"
              />
              <div className="d-flex flex-column ms-3">
                <h4
                  className="mb-0"
                  style={{ color: "white", marginLeft: "-60px" }}
                >
                  My Journey
                </h4>
                <h6 className="mb-0 me-2" style={{ color: "white" }}>
                  Super Admin's Journey
                </h6>
              </div>
            </div>
            <ChevronRightIcon style={{ color: "white", fontSize: 60 }} />
          </button>
          <div className="chat_div d-flex justify-content-between">
            <div className="chat_div_first">
              <h6 className="chat_heading mx-2 my-2">
                <b>Community Chats</b>
              </h6>
              <div className="chat_scroll">
              {/* <p className="no_chat_message">No community chats found.</p> */}
                {Array.isArray(group_chats) && group_chats.length > 0 ? (
                  group_chats.map((group, index) => (
                    <button type="button" className="chat_item" key={index}>
                      <img
                        src={
                          `https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/${group.channel.image}` ||
                          "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1492680652.jpg?c=16x9&q=w_800,c_fill"
                        }
                        alt="group"
                        className="chat_image"
                      />
                      <p className="chat_name">
                        {group.channel.name.length > 8
                          ? group.channel.name.slice(0, 8) + "…"
                          : group.channel.name}
                      </p>
                    </button>
                  ))
                ) : (
                  <p className="no_chat_message">No community chats found.</p>
                )}
              </div>
            </div>

            {/* Private Chats */}
            <div className="chat_div_second">
              <h6 className="chat_heading my-2 mx-2">
                <b>Private Chats</b>
              </h6>
              <div className="chat_scroll">
                {Array.isArray(personal_chats) && personal_chats.length > 0 ? (
                  personal_chats.map((person, index) => (
                    <button type="button" className="chat_item" key={index}>
                      <img
                        src={
                          `https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/${person.channel.member_count == 1 ? person.members[0].user.image : person.members[1].user.image}` ||
                          "https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_mof/chat/images/68751208a96794765d6738a7.jpeg"
                        }
                        alt="private"
                        className="chat_image"
                      />
                      <p className="chat_name">
                        {person.channel.member_count == 1 ? person.members[0].user.name.length > 8
                          ? person.members[0].user.name.slice(0, 8) + "…"
                          : person.members[0].user.name : person.members[0].user.name.length > 8
                          ? person.members[1].user.name.slice(0, 8) + "…"
                          : person.members[1].user.name}
                      </p>
                    </button>
                  ))
                ) : (
                  <p className="no_chat_message">No private chats found.</p>
                )}
              </div>
            </div>
          </div>
          <div className="chat_div d-flex justify-content-between my-3">
            <button className="bottom_div_first d-flex">
              <h6 className="bottom_heading mb-0">
                <b>Community Chat</b>
              </h6>
            </button>

            <button onClick={handleMeditationClicked} className="bottom_div_second d-flex">
              <h6 className="bottom_heading my-3 mx-3">
                <b>Meditations</b>
              </h6>
            </button>
            <button onClick={handleCourseClicked} className="bottom_div_third d-flex">
              <h6 className="bottom_heading my-3 mx-3">
                <b>Courses</b>
              </h6>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
