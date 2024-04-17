import { useRef, useEffect, useState } from "react";
import portrait from "./assets/portrait-light.png";
import uiucBackground from "./assets/uiuc-background.jpeg";
import accentureBackground from "./assets/accenture-background.jpeg";
import lbnlBackground from "./assets/lbnl-background.jpeg";
import nasaBackground from "./assets/nasa-background.webp";
import "./App.css";

function App() {
  const pageEnd = useRef(null);
  const [isPageTop, setIsPageTop] = useState(true);

  useEffect(() => {
    const checkIfTop = () => {
      if (pageEnd.current) {
        setIsPageTop(pageEnd.current.getBoundingClientRect().top > 0.5);
      }
    };

    setTimeout(() => {
      if (pageEnd.current) {
        pageEnd.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }, 800);

    window.addEventListener("scroll", checkIfTop);
  }, []);

  return (
    <div className="App">
      <div id="nav">
        <div id={isPageTop ? "" : "scrolled"}>
          <div id="link-container">
            <a className="nav-hotlink" href="#home-fullview">
              Home
            </a>
            <a className="nav-hotlink" href="#overview">
              Overview
            </a>
            <a className="nav-hotlink" href="#research">
              Research
            </a>
          </div>
        </div>
      </div>
      <div id="home">
        <div id="home-fullview" />
        <div id="portrait-overlay">
          <h1>Sherry</h1>
          <h1>Long</h1>
          Software Engineer
        </div>
        <img src={portrait} alt="Portrait" />
        <div id="autoscroll-anchor" ref={pageEnd} />
      </div>

      <div id="overview">
        <div className="title">
          <h1>Overview</h1>
          Internships, research, professional experiences
        </div>
        <div id="panel-container">
          <div className="panel">
            <img
              src={uiucBackground}
              alt="University of Illinois at Urbana-Champaign"
            />
            <p>
              <h3>2024</h3>
              <h1>UIUC</h1>
            </p>
          </div>
          <div className="panel" id="accenture">
            <img src={accentureBackground} alt="Accenture" />
            <p>
              <h3>2023</h3>
              <h1>Accenture</h1>
            </p>
          </div>
          <div className="panel">
            <img
              src={lbnlBackground}
              alt="Lawrence Berkeley National Laboratory"
            />
            <p>
              <h3>2022</h3>
              <h1>Berkeley Lab</h1>
            </p>
          </div>
          <div className="panel">
            <img src={nasaBackground} alt="NASA Ames Research Center" />
            <p>
              <h3>2021</h3>
              <h1>NASA Ames</h1>
            </p>
          </div>
        </div>
      </div>

      <div id="research">
        <div className="title">
          <h1>Research</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
