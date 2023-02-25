import React from 'react'
import ParaText from '../layouts/ParaText'
import ImageItem from '../layouts/ImageItem'
import "./footer.css"
import TittleHeading from '../layouts/TittleHeading'
import SocialItem from '../layouts/SocialItem'
import ListItem from '../layouts/ListItem'
const Footer = () => {
  return (
    <footer id="foot">
        <div id="talk">
            <div className="container">
                <div className="talk_flex">
                    <div className="talk_left">
                        <div className="talk_wrap">
                            {/* <img src="images/foot_Logo.png" alt="foot_Logo"/> */}
                            <ImageItem src="images/foot_Logo.png"/>
                        </div>
                        <div className="talk_left_text">
                            <ParaText text="We are always open to discuss your project and improve your online presence."/>
                        </div>
                    </div>
                    <div className="talk_right header">
                        <TittleHeading tittle="Lets Talk!"/>
                        <ParaText text="We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges."/>
                        <ul className="icon_talk">
                            <SocialItem icon="fa-brands fa-facebook"/>
                            <SocialItem icon="fa-brands fa-twitter"/>
                            <SocialItem icon="fa-brands fa-instagram"/>
                            <SocialItem icon="fa-brands fa-linkedin"/>
                        </ul>
                    </div>
                    <div className="talk_overlay">
                        <div className="talk_ov_left">
                            <h3>Email me at</h3>
                            <a href="#">contact@website.com</a>
                        </div>
                        <div className="talk_ov_right">
                            <h3>Call us</h3>
                            <a href="#">0927 6277 28525</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="foot_part">
            <div className="container">
                <div className="foot_nav">
                    <div className="foot_left">
                        <h4>Copyright 2022, Finsweet.com</h4>
                    </div>
                    <ul className="foot_right">
                        <ListItem title="Home"/>
                        <ListItem title="About us"/>
                        <ListItem title="Features"/>
                        <ListItem title="Pricing"/>
                        <ListItem title="FAQ"/>
                        <ListItem title="Blog"/>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer