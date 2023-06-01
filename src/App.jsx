import React from 'react'
import "./app.scss"
import HomePage from './components/Home/HomePage'
import Login from './components/Login/Login'
import HousingEdge from './components/HousingEdge/HousingEdge'
import FeatureCollection from './components/FeatureCollection/FeatureCollection'
import AppDownload from './components/AppDownload/AppDownload'
import PostProperty from './components/PostProperty/PostProperty'

const App = () => {
  return (
    <>
    <HomePage/>
    <HousingEdge/>
    <FeatureCollection/>
    <PostProperty/>
    <AppDownload/>
    {/* <Login/> */}

    </>
  )
}

export default App