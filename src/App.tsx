import Wallpaper from "./assets/headshot.png";
import DigitalClock from "./components/DigitalClock";
import Widget from "./components/Widget";
import Applet from "./components/Applet";
import "./App.css";

function App() {
  return (
    <div
      id="wallpaper"
      className="px-[1rem] sm:px-[3rem] bg-left sm:bg-bottom"
      style={{ backgroundImage: `url(${Wallpaper})` }}
    >
      <div className="flex w-full h-full justify-center sm:justify-between">
        <div id="widget-container">
          <div className="hidden sm:block">
            <DigitalClock />
          </div>
          <div className="sm:hidden -mt-4 -mb-1" id="sm-hello-message">
            <h1>Sherry Long</h1>
          </div>
          <div className="flex gap-[1rem]">
            <Widget app="weather"></Widget>
            <Widget app="reminder"></Widget>
          </div>
          <Widget app="photos"></Widget>
          <Widget app="email"></Widget>
        </div>
        <div id="lg-hello-message" className="hidden sm:flex">
          <h1>
            Sherry <br />
            Long
          </h1>
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
