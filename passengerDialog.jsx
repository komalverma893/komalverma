import React, { useState } from "react";
import "./PassengerDialog.css";

const PassengerDialog = () => {
  const [adults, setAdults] = useState(1);
  const [minors, setMinors] = useState(0);

  const handleChange = (type, operation) => {
    if (type === "adult") {
      if (operation === "inc") {
        setAdults((prev) => prev + 1);
      } else if (operation === "dec" && adults > 1) {
        setAdults((prev) => prev - 1);
      }
    }

    if (type === "minor") {
      if (operation === "inc") {
        setMinors((prev) => prev + 1);
      } else if (operation === "dec" && minors > 0) {
        setMinors((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="dialog-box">
      <div className="row">
        <span className="label">Adults:</span>
        <div className="counter">
          <button onClick={() => handleChange("adult", "dec")}>−</button>
          <span>{adults}</span>
          <button onClick={() => handleChange("adult", "inc")}>+</button>
        </div>
      </div>
      <div className="row">
        <span className="label">Minors:</span>
        <div className="counter">
          <button onClick={() => handleChange("minor", "dec")}>−</button>
          <span>{minors}</span>
          <button onClick={() => handleChange("minor", "inc")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDialog;
