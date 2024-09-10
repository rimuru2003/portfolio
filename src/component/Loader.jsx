import React from "react";
import "../css/Loader.css";  

const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src="https://cdn.dribbble.com/users/107759/screenshots/2436386/media/22e1ee1c38dae78eaec97b55d6f78167.gif"
        alt="loader"
        className="loader-img"
      />
    </div>
  );
};

export default Loader;
