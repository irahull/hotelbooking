import React, { useState, useRef } from "react";
import CollectionData from "./FeatureData";
import "./featurecollection.scss";
import ShowFeatureData from "./ShowFeatureData";

const FeatureCollection = () => {
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
      <div className="feature-container">
        <div className="feature-section">
          <p>
            Featured <span>Collection</span>
          </p>
        <div className="para">
          <p>Handpicked projects for you</p>
        </div>
        </div>
        <div className="feature-wrapper">
          {scrollX !== 0 && (
            <button
              className="prev"
              onClick={() => slide(-300)}
            >
              
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          )}
          <div className="feature-data" ref={scrl} onScroll={scrollCheck}>
            {CollectionData.map((item, ind) => {
              return <ShowFeatureData item={item} key={ind} />;
            })}
          </div>
          {!scrolEnd && (
            <button
              className="next"
              onClick={() => slide(+300)}
            >

              <i class="fa-solid fa-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureCollection;
