import React, { useState } from "react";
import "boxicons";

const Crousal = ({ imgArray }) => {
  const [currentState, setCurrentState] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    // borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${imgArray[currentState].image})`,
  };

  const goForword = () => {
    let currentI = currentState + 1;
    if (currentI > imgArray.length - 1) {
      currentI = 0;
    }
    setCurrentState(currentI);
  };
  const goPrevious = () => {
    let currentI = currentState - 1;
    if (currentI < 0) {
      currentI = imgArray.length - 1;
    }
    setCurrentState(currentI);
  };

  return (
    <div style={sliderStyle}>
      {imgArray.length > 1 ? (
        <div>
          <div
            className="LeftButton  absolute top-1/2 transform translate-y-[-50%] left-[-20px] z-30 cursor-pointer"
            onClick={goPrevious}
          >
            <h1 className="text-4xl font-bold">«</h1>
          </div>
          <div
            className="RightButton absolute top-1/2 transform translate-y-[-50%] right-[-15px] z-30 cursor-pointer"
            onClick={goForword}
          >
            <h1 className="text-4xl font-bold">»</h1>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div style={slideStyle} className="rounded-2xl overflow-hidden"></div>
    </div>
  );
};

export default Crousal;
