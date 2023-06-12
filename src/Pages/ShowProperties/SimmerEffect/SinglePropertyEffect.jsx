import React from "react";
import { ShimmerFeaturedGallery } from "react-shimmer-effects";
import { ShimmerCategoryItem } from "react-shimmer-effects";
import { ShimmerButton } from "react-shimmer-effects";
import { ShimmerTitle } from "react-shimmer-effects";
import { ShimmerSectionHeader } from "react-shimmer-effects";
import { ShimmerThumbnail } from "react-shimmer-effects";
// import { ShimmerSectionHeader } from "react-shimmer-effects";
const SinglePropertyEffect = () => {
  
  const style = {
    marginTop:"50px"
  }

  return (
    <>
      <div className="single-property">
        <ShimmerFeaturedGallery row={2} col={2} card frameHeight={390} />
      </div>
      <div className="single-property-container">
        <div className="extra-details">
          <div className="extra-left">
            <ShimmerCategoryItem
              hasImage
              imageType="circular"
              imageWidth={100}
              imageHeight={100}
              title
            />
            <div className="left-tab">
              <ShimmerButton size="lg" className="tab" />
              <ShimmerButton size="lg" className="tab" />
              <ShimmerButton size="lg" className="tab" />
            </div>
            <div className="left-text" style={{ padding: "10px 0px" }}>
              <div className="text-box">
                {/* <ShimmerCategoryItem
                  hasImage
                  imageType="thumbnail"
                  imageWidth={100}
                  imageHeight={100}
                  text
                /> */}
                <ShimmerSectionHeader />
              </div>
              <div className="left-about">
                <ShimmerTitle
                  line={10}
                  gap={10}
                  variant="secondary"
                  style={{ height: "2px" }}
                />
              </div>
            </div>
          </div>
          <div className="extra-right">
            <div className="extra-right-box extra-style">
              <ShimmerThumbnail height={550} width={420} rounded />
            </div>
          </div>
        </div>
        <div className="map" style={style}>
          <ShimmerThumbnail height={300} width={1000} rounded />
        </div>
      </div>
    </>
  );
};

export default SinglePropertyEffect;
