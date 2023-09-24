import "./App.css";
import React, { useRef } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./components/About/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PortfolioTheme from "./components/PortfolioTheme";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  const scrollRef = useRef(null);

  return (
    <PortfolioTheme>
      <BrowserRouter>
        <div className="App">
          <div aria-label="Scroll-top-position" ref={scrollRef} />
          <Appbar />
          <ScrollTop topRef={scrollRef} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </PortfolioTheme>
  );
}

export default App;
