import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(40);

  const onWeightChange = (event) => {
    setWeight(Number(event.target.value));
  };

  const onHeightChange = (event) => {
    setHeight(Number(event.target.value));
  };

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    const calculateBmi = weight / (calculateHeight * calculateHeight);
    return calculateBmi.toFixed(2);
  }, [height, weight]);

  return (
    <>
      <div className="container">
        <div>
          <h2>Calculate your BMI right now!</h2>
        </div>
        <div className="input-section">
          <p className="slider-output">Weight: {weight} kg</p>
          <input
            className="input-slider"
            type="range"
            step={1}
            min={40}
            max={200}
            onChange={onWeightChange}
          />
          <p className="slider-output">Height: {height} cm</p>
          <input
            className="input-slider"
            type="range"
            min={140}
            max={220}
            onChange={onHeightChange}
          />
        </div>
        <div className="output">
          <p>Your BMI is </p>
          <p className="output-section">{output}</p>
        </div>
      </div>
    </>
  );
}

export default App;
