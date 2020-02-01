import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? "lit" : "dark";
  let tempC = 72;
  const [temp, setTemp] = React.useState(tempC);
  return (
    <div className={`room ${brightness}`}>
      The room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>Flip</button>
      <button onClick={() => setLit(true)}>ON</button>
      <button onClick={() => setLit(false)}>OFF</button>
      <br />
      <br />
      Room Temprature is {temp} F
      <br />
      <button
        onClick={() => {
          tempC = temp + 1;
          setTemp(tempC);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          tempC = temp - 1;
          setTemp(tempC);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
