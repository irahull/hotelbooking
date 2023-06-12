import React, { useState, useRef } from "react";
import "./housingEdge.scss";
import EdgeData from "./HousingEdgeData";
import DisplayHousingData from "./DisplayHousingData";

const HousingEdge = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <div className="housing-edge-section">
        <div className="housing-heading">
          <p>
            Housing <span>Edge</span>
          </p>
          <div className="edge-btn">
            <button>Explore All</button>
          </div>
        </div>
        <div className="housing-wrapper">
          {scrollX !== 0 && (
            <button className="prev" onClick={() => slide(-150)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          )}
          <div className="housing-edge-data" ref={scrl} onScroll={scrollCheck}>
            {EdgeData.map((item, id) => {
              return <DisplayHousingData item={item} key={id}/>;
            })}
          </div>
          {!scrolEnd && (
            <button className="next" onClick={() => slide(+150)}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HousingEdge;
