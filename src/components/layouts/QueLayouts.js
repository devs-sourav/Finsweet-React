import React from 'react'
import TittleHeading from './TittleHeading'

const QueLayouts = ({serial,text}) => {
  return (
    <div className="question q_close">
    <div className="q_num">
        <h3>{serial}</h3>
    </div>
    <div className="q_item">
        <div className="q_item_text">
            <TittleHeading tittle={text}/>
            <a href="#"><i className="fa-solid fa-plus"></i></a>
        </div>
    </div>
</div>
  )
}

export default QueLayouts