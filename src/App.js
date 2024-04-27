import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/home" className="link">
            HOME
          </Link>
          <Link to="/about" className="link">
            ABOUT
          </Link>
          <Link to="/contactus" className="link">
            CONTACT US
          </Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
