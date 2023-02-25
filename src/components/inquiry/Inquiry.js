import React from 'react'
import ParaText from '../layouts/ParaText'
import TittleHeading from '../layouts/TittleHeading'
import "./inquiry.css"

const Inquiry = () => {
  return (
    <section id="inquiry">
        <div className="container">
            <div className="ing_wrap">
                <div className="inq_left_wrap">
                    <div className="inq_left">
                        <TittleHeading tittle="Building stellar websites for early startups"/>
                        <ParaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
                    </div>
                </div>
                <div className="inq_right">
                    <div className="inq_right_text">
                        <h3>Send inquiry</h3>
                        <ParaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
                    </div>

                    <form>
                        <input type="text" placeholder="Your Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Paste your Figma design URL"/>
                    </form>
                    <div className="btn inq_btn">
                        <a href="#" className="btn_work">Send an Inquiry</a>
                        <a href="#" className="btn_price">Get in touch with us<i className="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inquiry