import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function ProfileSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleProfileClicked = () => {
    navigate('/profile');
    onClose();
  };

  const handleDashboardClicked = () => {
    navigate('/');
    onClose();
  };

  return (
    <div className={`profile_sidebar ${isOpen ? 'open' : ''} my-3 mx-3`}>
      <div className="sidebar_header">
        <button onClick={onClose} className="close_btn">
          <CloseIcon style={{ fontSize: 20 }} />
        </button>
      </div>
      <div className="profile_info text-center">
        <img
          className="profile_img"
          src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=200&q=80"
          alt="profile"
        />
        <h6 className="mt-2"><b>Super Admin</b></h6>
        <p className="email_text">superadmin@mof.com</p>
      </div>
      <hr />
      <div className="profile_links">
        <button type='button' className="profile_link" onClick={handleProfileClicked}><AccountCircleIcon /> Profile</button>
        <button type='button' className="profile_link"><AdminPanelSettingsIcon /> Admin Panel</button>
        <button type='button' className="profile_link" onClick={handleDashboardClicked}><DashboardIcon /> Dashboard</button>
        <button type='button' className="profile_link"><HistoryIcon /> My Activity Log</button>
        <button type='button' className="profile_link"><LogoutIcon /> Logout</button>
      </div>
    </div>
  );
}
