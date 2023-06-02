import React from 'react'
import "./app.scss"
import HomePage from './components/Home/HomePage'
import Login from './components/Login/Login'
import HousingEdge from './components/HousingEdge/HousingEdge'
import FeatureCollection from './components/FeatureCollection/FeatureCollection'
import AppDownload from './components/AppDownload/AppDownload'
import PostProperty from './components/PostProperty/PostProperty'
import Footer from './components/Footer/Footer'
import Creativity from './components/CreativitySeaction/Creativity'

const App = () => {
  return (
    <>
    <HomePage/>
    <HousingEdge/>
    <FeatureCollection/>
    <PostProperty/>
    <Creativity/>
    <AppDownload/>
    <Footer/>
    {/* <Login/> */}

    </>
  )
}

export default App