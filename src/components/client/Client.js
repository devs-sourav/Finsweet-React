import React from 'react'
import ImageItem from '../layouts/ImageItem'
import ParaText from '../layouts/ParaText'
import TittleHeading from '../layouts/TittleHeading'
import "./client.css"

const Client = () => {
  return (
    <section id="client">
        <div className="container">
            <div className="client_wrap">
                <div className="client_left">
                    <div className="client_head">
                        <TittleHeading tittle="What our clients say about us"/>
                        <ParaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed."/>
                    </div>
                </div>
                <div className="client_right">
                    <div className="client_text">
                        <ParaText text="The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."/>
                    </div>
                    <div className="com_wrap">
                        <div className="comment">
                            <div className="com_img">
                                <ImageItem src="images/comment img.png"/>
                            </div>
                            <div className="com_text">
                                <a className="name" href="#">Jenny Wilson</a>
                                <ParaText text="Vice President"/>
                            </div>
                        </div>
                        <div className="com_slide">
                            <div className="left"><i className="fa-solid fa-angle-left"></i></div>
                            <div className="right"><i className="fa-solid fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client