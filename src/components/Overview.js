import { useState, useEffect } from "react";
import uiucBackground from "../assets/uiuc-background.jpeg";
import uiucLogo from "../assets/uiuc-logo.png";
import accentureBackground from "../assets/accenture-background.jpeg";
import accentureLogo from "../assets/accenture-logo.png";
import lbnlBackground from "../assets/lbnl-background.jpeg";
import lbnlLogo from "../assets/lbnl-logo.png";
import nasaBackground from "../assets/nasa-background.webp";
import nasaLogo from "../assets/nasa-logo.png";

const frontPanel = [
  {
    id: 0,
    company: "UIUC",
    year: "2024",
    background: uiucBackground,
  },
  {
    id: 1,
    company: "Accenture",
    year: "2023",
    background: accentureBackground,
  },
  {
    id: 2,
    company: "Berkeley Lab",
    year: "2022",
    background: lbnlBackground,
  },
  {
    id: 3,
    company: "NASA Ames",
    year: "2021",
    background: nasaBackground,
  },
];

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
            <h2>Description coming soon!</h2>
            {/* <img
              src={descriptions[currPopup].logo}
              alt={descriptions[currPopup].alt}
            />
            <h1>{descriptions[currPopup].title}</h1>
            <p>{descriptions[currPopup].description}</p> */}
          </div>
        </div>
      )}

      <div id="panel-container">
        {frontPanel.map((item) => (
          <div
            key={item.id}
            className="panel"
            onClick={() => openPopup(item.id)}
          >
            <img src={item.background} alt={item.company} />
            <div className="panel-text">
              <h3>{item.year}</h3>
              <h1>{item.company}</h1>
            </div>
            <button className="panel-button" onClick={() => openPopup(item.id)}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
