import React, { useState } from "react";
import "./BaseUrl.css";

const BaseUrl = () => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("url", value);
    window.location.href = "/home";
  };

  const handleSkipClick = () => {
    window.location.href = "/home";
  };

  return (
    <div className="base-container">
      <div className="input-container">
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Submit</button>
      <button onClick={handleSkipClick}>Skip</button>
    </div>
  );
};

export default BaseUrl;
