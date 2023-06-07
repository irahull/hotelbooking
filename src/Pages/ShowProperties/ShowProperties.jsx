import React from 'react';
import "./showProperties.scss"
import Properties from "./Properties/Properties"
import RoomOne from "./../../assets/room-one.webp"
import RoomTwo from "./../../assets/room-two.webp"
import RoomThree from "./../../assets/room-three.webp"
import RoomFour from "./../../assets/room-four.webp"
import RoomFive from "./../../assets/room-five.webp"

const ShowProperties = () => {
  return (
    <div className='properties-container'>
      <Properties image={RoomFive}/>
      <Properties image={RoomFour}/>
      <Properties image={RoomThree}/>
      <Properties image={RoomTwo}/>
      <Properties image={RoomOne}/>
      <Properties image={RoomFour}/>
      <Properties image={RoomTwo}/>
      <Properties image={RoomOne}/>
      <Properties image={RoomFour}/>
      <Properties image={RoomFive}/>
      <Properties image={RoomThree}/>
      <Properties image={RoomTwo}/>
    </div>
  )
}

export default ShowProperties