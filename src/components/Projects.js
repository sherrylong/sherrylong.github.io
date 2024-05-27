import { useState } from "react";

export default function Projects() {
  const [toggle, setToggle] = useState(0);
  const projects = [
    {
      id: 0,
      title: "Rembrandt",
      description: "Description",
    },
    {
      id: 1,
      title: "Six Degrees",
      description: "Description",
    },
  ];

  const handleToggle = (id) => setToggle(id);
  return (
    <div id="projects">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div id="slider-container">
        {projects.map((project) => (
          <div key={project.id} className="slider">
            <input
              type="radio"
              id={`project-${project.id}`}
              name="radio"
              checked={toggle === project.id}
              onChange={() => handleToggle(project.id)}
            />
            <label htmlFor={`project-${project.id}`}>{project.title}</label>
          </div>
        ))}
      </div>
      <div id="projects-body"></div>
    </div>
  );
}
