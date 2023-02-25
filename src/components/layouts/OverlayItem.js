import React from 'react'
import BtnLayouts from '../btn/BtnLayouts'

const OverlayItem = ({tittle}) => {
  return (
    <div className="pro_overlay1">
        <div className="overlay_text">
            <h3>{tittle}</h3>
            <BtnLayouts tittle="View portfolio" src="fa-solid fa-right-long"/>
        </div>
    </div>
  )
}

export default OverlayItem