import React, { useState } from "react";

const Themetoggle = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
    document.body.classList.toggle("dark-theme-variables");
  };
  return (
    <>
      <div
        className={theme ? "switch-mode" : "switch-mode dark"}
        onClick={() => toggleTheme()}
      >
        <div></div>
      </div>
    </>
  );
};

export default Themetoggle;
