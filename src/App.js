import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./components/About/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PortfolioTheme from "./components/PortfolioTheme";
import Footer from "./components/Footer";

function App() {
  return (
    <PortfolioTheme>
      <BrowserRouter>
        <div className="App">
          <Appbar />

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
