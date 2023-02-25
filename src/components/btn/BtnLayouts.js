import React from 'react'
import "./all.min.css"

const BtnLayouts = ({tittle,src}) => {
  return (
    <div className="btn">
      <a href="#" className="btn_price">{tittle}<i className={src}></i></a>
    </div>
  )
}

export default BtnLayouts