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
  const [langChoice, setLangChoice] = useState("en");

  return (
    <PortfolioTheme>
      <BrowserRouter>
        <Appbar langChoice={langChoice} setLangChoice={setLangChoice} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home langChoice={langChoice} />} />
            <Route
              path="/experience"
              element={<Experience langChoice={langChoice} />}
            />
            <Route
              path="/education"
              element={<Education langChoice={langChoice} />}
            />
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
