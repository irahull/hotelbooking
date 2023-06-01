import React from "react";
import "./middlebtn.scss";
import { gsap } from "gsap";

const MiddleBtn = () => {
  let link = document.querySelector(".link");
  let pink = document.querySelector(".color");

  let hoverTL = gsap.timeline();
  hoverTL.pause();

  // from, to, fromTo Tweens
  hoverTL.to(pink, {
    width: "calc(100% + 1.3em)",
    ease: "Elastic.easeOut(0.25)",
    duration: 0.4,
  });
  hoverTL.to(pink, {
    width: "2em",
    left: "calc(100% - 1.45em)",
    ease: "Elastic.easeOut(0.4)",
    duration: 0.6,
  });

  const BtnGrow = () => {
    hoverTL.play();
    
  };
  const BtnShrink = () => {
    hoverTL.reverse();
  };

  // link.addEventListener("mouseenter", () => {

  // });

  // link.addEventListener("mouseleave", () => {
  //   hoverTL.reverse();
  // });

  return (
    <div class="wrapper" onMouseEnter={BtnGrow} onMouseLeave={BtnShrink}>
      <a class="link" href="#" target="_blank">
        <div class="color"></div>
        <span>Explore Now</span>
        <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default MiddleBtn;
