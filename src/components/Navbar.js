import React, {useState, useRef, useEffect} from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileSidebar from './ProfileSidebar';
import '../App.css'

export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
<nav className="navbar navbar-expand-lg bg-black navbar-dark py-4">
  <div className="container-fluid justify-content-center d-flex position-relative">
    
    {/* Centered logo */}
    <div className="position-absolute start-50 translate-middle-x">
      <img
        className="header_logo"
        src="https://devshield-ic-global-bucket.us-southeast-1.linodeobjects.com/ic_mof/assets/images/man_on_fire_white.png"
        alt="logo"
        style={{ height: '45px' }}
      />
    </div>

    {/* Right icon */}
    <div className="ms-auto">
      <button onClick={toggleSidebar} style={{ border: "none", outline: "none", background: "transparent", padding: 0 }}>
        <MenuIcon style={{ color: "white", fontSize: '28px'}} />
      </button>
    </div>
    
  </div>
</nav>
    <ProfileSidebar isOpen={showSidebar} onClose={toggleSidebar} />
    </>
  )
}
