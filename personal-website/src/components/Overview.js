import uiucBackground from "../assets/uiuc-background.jpeg";
import accentureBackground from "../assets/accenture-background.jpeg";
import lbnlBackground from "../assets/lbnl-background.jpeg";
import nasaBackground from "../assets/nasa-background.webp";

export default function Overview() {
  return (
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
  );
}
