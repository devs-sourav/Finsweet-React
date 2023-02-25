import React from 'react'

const WorkLayouts = ({tittle,para,img}) => {
  return (
    <div className="work_item">
        <div className="work_img">
            <img src={img} alt="work pointer 1.png"/>
        </div>
        <div className="work_text">
            <a href="#">{tittle}</a>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default WorkLayouts