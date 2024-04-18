import { useRef, useEffect, useState } from "react";
import portrait from "./assets/portrait-light.png";
import slLogo from "./assets/sl-logo.png";
import "./App.css";
import Overview from "./components/Overview.js";

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
              <img src={slLogo} alt="SL Logo" height="24rem" />
            </a>
            <a className="nav-hotlink" href="#overview">
              Overview
            </a>
            {/* <a className="nav-hotlink" href="#research">
              Research
            </a> */}
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
        <a id="discover" href="#overview">
          Discover →
        </a>
        <img src={portrait} alt="Portrait" />
        <div id="autoscroll-anchor" ref={pageEnd} />
      </div>

      <Overview />

      {/* <div id="research">
        <div className="title">
          <h1>Research</h1>
        </div>
      </div> */}
    </div>
  );
}

export default App;
