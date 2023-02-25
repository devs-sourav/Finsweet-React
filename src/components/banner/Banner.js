import React from 'react'
import ParaText from '../layouts/ParaText'
import "./banner.css"

const Banner = () => {
  return (

    <section id="banner">
    <div className="container">
    <div className="ban_wrap">
    <div className="ban_left">
        <h2>Building stellar websites for early startups</h2>
        <ParaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
        <div className="btn top_gap">
            <a href="#" className="btn_work">View our work</a>
            <a href="#" className="btn_price">View Pricing<i className="fa-solid fa-right-long"></i></a>
        </div>
    </div>
    <div className="ban_right">
        <img src="images/Banner img.png" alt="Banner img.png"/>
    </div>
    </div>
    </div>
    </section>

  )
}

export default Banner