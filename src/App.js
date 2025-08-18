import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Journey from "./components/Journey";
import Courses from "./components/Courses";
import SingleMeditation from "./components/SingleMeditation";
import Meditations from "./components/Meditations";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-journey" element={<Journey />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meditations" element={<Meditations />} />
      </Routes>
      </Router>
      {/* <LoginButton/>
        <LogoutButton/>
        <Profile /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
