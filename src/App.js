import { useState } from "react";
import "./styles.css";

export default function App() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  setTimeout(() => {
    let date = new Date();
    setHours(("0" + date.getHours()).slice(-2));
    setMinutes(("0" + date.getMinutes()).slice(-2));
    setSeconds(("0" + date.getSeconds()).slice(-2));
  }, 1000);

  return (
    <div className="App">
      <div className="watch">
        <span className="hours">{hours}</span>:
        <span className="hours">{minutes}</span>:
        <span className="seconds">{seconds}</span>
      </div>
    </div>
  );
}
