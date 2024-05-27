import { useState } from "react";
import arrowRight from "../assets/arrow-right.png";
import arrowDown from "../assets/arrow-down.png";
import nasaResearch from "../assets/nasa-research.png";
import uiucResearch from "../assets/uiuc-research.png";
import lbnlResearch from "../assets/lbnl-research.png";

export default function Research() {
  const [toggle, setToggle] = useState(0);
  const descriptions = [
    {
      id: 0,
      title: "An Analysis of Metagenomics Using k-mer Based Data Structures",
      text: "In the field of computational genomics, searching a large collection of sequencing studies for a sequence of interest remains a fundamental problem due to large computational overhead. Our approach employs algorithms that parse data into fixed-length k-mer sequences and aggregate k-mer profiles into color matrix structures that can be compressed and queried for subpatterns. The aim of this research is to build new applications of color matrices that can improve search capabilities in time and space efficiency.",
      diagram: uiucResearch,
    },
    {
      id: 1,
      title:
        "Probing the Morphology of Ion-Conducting Polymers Using Resonant X-Ray Scattering",
      text: "Ionomers are important components of fuel cells, acting as binding agents for catalyst particles and facilitating the transport of reactive species essential for fuel cell performance. However, due to the nanoscale thinness of catalyst layers, resistance to reactive species transport is high. The aim of this research is to understand how different ionomer chemistries impact thin film morphology. Using Resonant Soft X-ray Scattering (RSoXS) and Near-Edge X-ray Absorption Fine Structure (NEXAFS) techniques, we can analyze morphology with chemical specificity.",
      diagram: lbnlResearch,
    },
    {
      id: 2,
      title:
        "Effects of Radiation-Induced Differential Fibrin Gene Expression on Retinal Coagulation in Spaceflight",
      text: "The effects of radiation exposure on retinal function during spaceflight remain underexplored, despite established physiological symptoms linked to microgravity. We analyzed transcriptomic data of murine retinal tissue to examine differential expression of genes under spaceflight conditions. Significant up-regulation of coagulation pathways suggested a heightened risk of retinal vascular occlusion under chronic radiation exposure. Our proposed study aims to advance understanding of ocular responses to radiation and the associated risks of extended space travel.",
      diagram: nasaResearch,
    },
  ];

  const handleToggle = (id) => {
    setToggle(id);
  };

  return (
    <div id="research">
      <div className="title">
        <h1>Research</h1>
      </div>
      <div id="research-body">
        <div id="toggle-area">
          {descriptions.map((item) => (
            <div key={item.id} className="toggle-container">
              {/* <div className="toggle">
                <input
                  type="radio"
                  id={item.id}
                  name="radio"
                  onChange={() => handleToggle(item.id)}
                  disabled={toggle === item.id}
                />
                <label
                  for={item.id}
                  className="radio-button"
                  onMouseEnter={() => handleToggle(item.id)}
                >
                  <img
                    src={toggle === item.id ? arrowDown : arrowRight}
                    height="20rem"
                    alt="Arrow Icon"
                  />
                </label>
              </div> */}
              <div className="research-text">
                <div
                  onMouseEnter={() => handleToggle(item.id)}
                  className={`research-title ${
                    toggle === item.id ? "active" : ""
                  }`}
                >
                  <h2>{item.title}</h2>
                </div>
                <div
                  className={`research-description ${
                    toggle === item.id ? "show" : ""
                  }`}
                >
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="diagram">
          <img
            src={descriptions[toggle].diagram}
            alt="Research Pipeline Diagram"
          />
        </div>
      </div>
    </div>
  );
}
