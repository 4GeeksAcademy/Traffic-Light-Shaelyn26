import React, { useState } from "react";

//create your first component
const Home = () => {
  const [activeColor, setActiveColor] = useState("red");
  const lightStyle = (color) => ({
    backgroundColor: color,
    boxShadow: activeColor === color ? `0 0 30px 10px ${color}` : "none",
  });
  return (
    <div className="container d-flex">
      <div className="main-box bg-dark align-items-center mx-auto">
        <div
          className="red light bg-danger circle mx-auto"
          style={lightStyle("red")}
          onClick={() => setActiveColor("red")}
        >
          {" "}
        </div>

        <div
          className="yellow light bg-warning circle mx-auto"
          style={lightStyle("yellow")}
          onClick={() => setActiveColor("yellow")}
        >
          {" "}
        </div>

        <div
          className="green light bg-success circle mx-auto"
          style={lightStyle("green")}
          onClick={() => setActiveColor("green")}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
