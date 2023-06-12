import React from "react";
import "./app.scss";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import HousingEdge from "./components/HousingEdge/HousingEdge";
import FeatureCollection from "./components/FeatureCollection/FeatureCollection";
import AppDownload from "./components/AppDownload/AppDownload";
import PostProperty from "./components/PostProperty/PostProperty";
import Footer from "./components/Footer/Footer";
import Creativity from "./components/CreativitySeaction/Creativity";
import ShowProperties from "./Pages/ShowProperties/ShowProperties";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import SearchBar from "./components/Home/SearchBar/SearchBar";
import SingleProperties from "./Pages/ShowProperties/SingleProperties/SingleProperties";
import Error from "./Pages/Error/Error"

const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <HomePage />
          <HousingEdge />
          <FeatureCollection />
          <PostProperty />
          <Creativity />
          <AppDownload />
          <Footer />
        </div>
      ),
    },
    {
      path: "/login",
      element : (<Login/>)
    },
    {
      path: "/search",
      element : <>
      <Navbar/>
      <SearchBar/>
       <ShowProperties/>
       <Footer />
      </>
    },
    {
      path: "/search/:id",
      element : <>
      <Navbar/>
       <SingleProperties/>
       <Footer />
      </>
    },
    {
      path:"*",
      element : <>
      <Navbar/>
      <Error/>
      <Footer />
      </>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
