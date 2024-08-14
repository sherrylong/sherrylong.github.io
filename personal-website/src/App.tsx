import { useState } from "react";
import Wallpaper from "./assets/headshot.png";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
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
            <Widget title="" width="50%"></Widget>
            <Widget title="" width="50%"></Widget>
          </div>
          <Widget title=""></Widget>
          <Widget title=""></Widget>
        </div>
        <div className="flex w-full justify-end">
          <div id="hello-message">
            <h1>Hi, I'm Sherry!</h1>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 flex justify-center items-center w-full">
        <div id="app-container">
          <Applet
            icon={() => (
              <SiGmail className="app-icon bg-white text-[#d2493b] p-1.5" />
            )}
            label="Email"
            link="mailto:sherrylong123@gmail.com"
          ></Applet>
          <Applet
            icon={() => (
              <FaLinkedinIn className="app-icon bg-[#0a66c2] text-white p-1.5" />
            )}
            label="LinkedIn"
            link="https://www.linkedin.com/in/sherry-long/"
          ></Applet>
          <Applet
            icon={() => (
              <IoLogoGithub className="app-icon bg-black text-white p-1" />
            )}
            label="GitHub"
            link="https://github.com/sherrylong"
          ></Applet>
        </div>
      </div>
    </div>
  );
}

export default App;
