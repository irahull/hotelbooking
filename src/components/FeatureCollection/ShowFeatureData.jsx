import React from 'react'

const ShowFeatureData = ({item,key}) => {
  return (
    <div className="data-section" key={key}>
      <div className="image-section">
        <img src={item.image} alt="aaaa" />
      </div>
      <div className="title-section">
        <div className="property">
          <p>{item.id} <span>properties</span> </p>
        </div>
        <h4>{item.title}</h4>
        <p>{item.para}</p>
      </div>
    </div>
  )
}

export default ShowFeatureData