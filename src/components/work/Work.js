import React from 'react'
import WorkLayouts from '../layouts/WorkLayouts'
import Title from '../layouts/Title'
import TittleHeading from '../layouts/TittleHeading'
import BtnLayouts from '../btn/BtnLayouts'
import "./work.css"
import ParaText from '../layouts/ParaText'

const Work = () => {
  return (
    <section id="work">
        <div className="container">
            <div className="work_wrapper">
                <div className="work_left">
                    <Title>
                        <TittleHeading tittle="How we work"/>
                        <ParaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
                        <BtnLayouts tittle="Get in touch with us" src="fa-solid fa-right-long"/>
                    </Title>
                </div>
                <div className="work_right">
                    <WorkLayouts tittle ="Strategy" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/work pointer 1.png"/>
                    <WorkLayouts tittle ="Wireframing" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/work pointer 2.png"/>
                    <WorkLayouts tittle ="Design" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/work pointer 3.png"/>
                    <WorkLayouts tittle ="Development" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." img="images/work pointer 4.png"/>
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work