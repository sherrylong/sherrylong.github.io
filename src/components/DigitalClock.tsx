import { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");

    hours = hours % 12 || 12;

    return `${hours}:${minutes}`;
  }

  function formatDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = daysOfWeek[time.getDay()];
    const month = monthsOfYear[time.getMonth()];
    const dayOfMonth = time.getDate();

    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }

  return (
    <div id="clock-container">
      <span id="time">{formatTime()}</span>
      <span id="date">{formatDate()}</span>
    </div>
  );
}
export default DigitalClock;
