import { useState, useEffect } from "react";
import uiucBackground from "../assets/uiuc-background.jpeg";
import accentureBackground from "../assets/accenture-background.jpeg";
import lbnlBackground from "../assets/lbnl-background.jpeg";
import nasaBackground from "../assets/nasa-background.webp";

const descriptions = {
  UIUC: {
    title: "Researcher @ UIUC",
    description: "Here is a description of what I did",
  },
  Accenture: {
    title: "Intern @ Accenture",
    description: "Here is a description of what I did",
  },
  LBNL: {
    title: "Intern @ LBNL",
    description: "Here is a description of what I did",
  },
  NASA: {
    title: "Intern @ NASA",
    description: "Here is a description of what I did",
  },
};

export default function Overview() {
  const [currPopup, setCurrPopup] = useState(null);

  const openPopup = (id) => setCurrPopup(id);
  const closePopup = () => setCurrPopup(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && currPopup !== null) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currPopup]);

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div id="overview">
      <div className="title">
        <h1>Overview</h1>
        Internships, research, professional experiences
      </div>

      {currPopup !== null && (
        <div className="popup-background" onClick={closePopup}>
          <div className="popup" onClick={handlePopupClick}>
            <h1>{descriptions[currPopup].title}</h1>
            <p>{descriptions[currPopup].description}</p>
          </div>
        </div>
      )}

      <div id="panel-container">
        <div className="panel" onClick={() => openPopup("UIUC")}>
          <img
            src={uiucBackground}
            alt="University of Illinois at Urbana-Champaign"
          />
          <div className="panel-text">
            <h3>2024</h3>
            <h1>UIUC</h1>
          </div>
          <button className="panel-button" onClick={() => openPopup("UIUC")}>
            +
          </button>
        </div>
        <div className="panel" onClick={() => openPopup("Accenture")}>
          <img src={accentureBackground} alt="Accenture" />
          <div className="panel-text">
            <h3>2023</h3>
            <h1>Accenture</h1>
          </div>
          <button
            className="panel-button"
            onClick={() => openPopup("Accenture")}
          >
            +
          </button>
        </div>
        <div className="panel" onClick={() => openPopup("LBNL")}>
          <img
            src={lbnlBackground}
            alt="Lawrence Berkeley National Laboratory"
          />
          <div className="panel-text">
            <h3>2022</h3>
            <h1>Berkeley Lab</h1>
          </div>
          <button className="panel-button" onClick={() => openPopup("LBNL")}>
            +
          </button>
        </div>
        <div className="panel" onClick={() => openPopup("NASA")}>
          <img src={nasaBackground} alt="NASA Ames Research Center" />
          <div className="panel-text">
            <h3>2021</h3>
            <h1>NASA Ames</h1>
          </div>
          <button className="panel-button" onClick={() => openPopup("NASA")}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
