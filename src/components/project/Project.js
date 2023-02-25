import React from 'react'
import BtnLayouts from '../btn/BtnLayouts'
import ImageItem from '../layouts/ImageItem'
import OverlayItem from '../layouts/OverlayItem'
import ParaText from '../layouts/ParaText'
import Title from '../layouts/Title'
import TittleHeading from '../layouts/TittleHeading'
import "./project.css"


const Project = () => {
  return (
    <section id="project">
    <div className="container">
        <div className="project_wrap">
            <div className="pro_head">
                <Title>
                    <div className="header">
                        <TittleHeading tittle="View our projects"/>
                    </div>
                    <BtnLayouts tittle="View More" src="fa-solid fa-right-long"/>
                </Title>
            </div>
            <div className="pro_img_wrap">
                <div className="pro_left">
                    <ImageItem src="images/Card.png"/>
                    <div className="pro_overlay">
                        <div className="overlay_text">
                            <h3>Workhub office Webflow Webflow Design</h3>
                            <ParaText text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam "/>
                            <BtnLayouts tittle="View project" src="fa-solid fa-right-long"/>
                        </div>
                    </div>
                </div>
                <div className="pro_right">
                    <div className="pro_img1">
                        <ImageItem src="images/project img 1.png"/>
                        <OverlayItem tittle="Unisaas Website
                                    Design"/>
                    </div>

                    <div className="pro_img1 mgap">
                        <ImageItem src="images/project img 2.png"/>
                        <OverlayItem tittle="Finsweet Website
                                    Design"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Project