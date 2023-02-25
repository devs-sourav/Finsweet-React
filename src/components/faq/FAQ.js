import React from 'react'
import ParaText from '../layouts/ParaText'
import QueLayouts from '../layouts/QueLayouts'
import QuestionItem from '../layouts/QuestionItem'
import TittleHeading from '../layouts/TittleHeading'
import "./faq.css"

const FAQ = () => {
  return (
    <section id="faq">
        <div className="container">
            <div className="faq_wrap">
                <div className="left_faq">
                    <div className="faq_head">
                        <TittleHeading tittle="Frequently asked questions"/>
                        <a href="#">Contact us for more info</a>
                    </div>
                </div>
                <div className="right_faq">
                    <QuestionItem>
                        <div className="question q_open">
                            <div className="q_num">
                                <h3>01</h3>
                            </div>
                            <div className="q_item">
                                <div className="q_item_text">
                                    <TittleHeading tittle="How much time does it take?"/>
                                    <a href="#"><i className="fa-solid fa-xmark"></i></a>
                                </div>
                                <ParaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            </div>
                        </div>
                    </QuestionItem>
                    <QuestionItem>
                        <QueLayouts serial="02" text="What is your className naming convention?"/>
                    </QuestionItem>
                    <QuestionItem>
                        <QueLayouts serial="03" text="How do you communicate?"/>
                    </QuestionItem>
                    <QuestionItem>
                        <QueLayouts serial="04" text="I have a bigger project. Can you handle it?"/>
                    </QuestionItem>
                    <QuestionItem>
                        <div className="question q_alt">
                            <div className="q_num">
                                <h3>05</h3>
                            </div>
                            <div className="q_item">
                                <div className="q_item_text">
                                    <TittleHeading tittle="What is your className naming convention?"/>
                                    <a href="#"><i className="fa-solid fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </QuestionItem>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ