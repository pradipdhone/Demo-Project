import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Courses from "./components/courses";
import React, { useState } from "react";
import Dashboard from "./components/dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";

function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  return (
    <>
    <Router>
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Routes>
          <Route path="/courses" element={ <Courses />} />
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/news" element={<News/>}/>
      </Routes>
  
      
    </div>
    </Router>
    </>
  );
}

export default App;
