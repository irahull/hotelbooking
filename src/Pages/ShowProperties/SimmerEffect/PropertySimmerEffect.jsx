import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { ShimmerTitle } from "react-shimmer-effects";

const PropertySimmerEffect = () => {
  return (
    <div className="properties-section">
      {/* <ShimmerSectionHeader width = {285} height={330}/> */}
      <ShimmerThumbnail height={250} width={285} rounded />
      <ShimmerTitle line={2} gap={10} variant="secondary" />
    </div>
  );
};

export default PropertySimmerEffect;
