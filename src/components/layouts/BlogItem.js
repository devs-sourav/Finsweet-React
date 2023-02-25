import React from 'react'

const BlogItem = ({imgsrc,date,tittle,para}) => {
  return (
    <div className="blog_items">
        <div className="card_blog">
            <div className="blog_img">
                <img src={imgsrc} alt="blog1"/>
            </div>
        </div>
        <div className="blog_card_text">
            <h4>{date}</h4>
            <h2>{tittle}</h2>
            <p>{para}</p>
            <div className="btn blg_btn_gap">
                <a href="#" className="btn_price">Read More<i className="fa-solid fa-right-long"></i></a>
            </div>
        </div>
    </div>
  )
}

export default BlogItem