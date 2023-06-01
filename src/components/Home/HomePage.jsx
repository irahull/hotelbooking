import React from "react";
import "./homePage.scss";
import Navbar from "./Navbar/Navbar";
import HomeMiddle from "./HomeMiddle/HomeMiddle";
import SearchBar from "./SearchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <HomeMiddle />
      <SearchBar/>
    </div>
  );
};

export default HomePage;
