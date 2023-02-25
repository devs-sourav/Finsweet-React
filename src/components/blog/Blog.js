import React from 'react'
import BlogItem from '../layouts/BlogItem'
import TittleHeading from '../layouts/TittleHeading'
import "./blog.css"

const Blog = () => {
  return (
    <section id="blog">
        <div className="container">
            <div className="header">
                <TittleHeading  tittle ="Our blog"/>
            </div>
            <div className="card_wrap">
                <BlogItem date="19 Jan 2022" tittle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" imgsrc="images/blog1.png" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
                <BlogItem date="19 Jan 2022" tittle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" imgsrc="images/blog2.png" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
                <BlogItem date="19 Jan 2022" tittle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" imgsrc="images/blog3.png" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
            </div>
        </div>
    </section>
  )
}

export default Blog