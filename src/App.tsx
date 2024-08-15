import { useState } from "react";
import Wallpaper from "./assets/headshot.png";
import DigitalClock from "./components/DigitalClock";
import Widget from "./components/Widget";
import Applet from "./components/Applet";
import "./App.css";

function App() {
  return (
    <div id="wallpaper" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className="flex">
        <div id="widget-container">
          <DigitalClock />
          <div className="flex gap-3">
            <Widget app="" width="50%"></Widget>
            <Widget app="" width="50%"></Widget>
          </div>
          <Widget app="weather"></Widget>
          <Widget app="photos"></Widget>
        </div>
        <div className="flex w-full justify-end">
          <div id="hello-message">
            <h1>Sherry Long</h1>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 flex justify-center items-center w-full">
        <div id="app-container">
          <Applet label="Email" link="mailto:sherrylong123@gmail.com" />
          <Applet
            label="LinkedIn"
            link="https://www.linkedin.com/in/sherry-long/"
          />
          <Applet label="GitHub" link="https://github.com/sherrylong" />
        </div>
      </div>
    </div>
  );
}

export default App;
