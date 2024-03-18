import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./blog.css"
import Blog1 from "../../assets/blog-1.png"
import Blog2 from "../../assets/blog-2.png"
import Blog3 from "../../assets/blog-3.png"
import { FaCaretRight } from "react-icons/fa";

const Blog = () => {
    return (
        <section id="blog">
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="blog-head">
                            <h2>Our blog</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} sm={12}>
                        <div className="blog-item">
                                <img src={Blog1} alt="" className='w-100'/>
                                <h5>19 Jan 2022</h5>
                                <h3>How one Webflow user grew his single person consultancy from $0-100K in 14      months</h3>
                                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <a href="#">Read More <FaCaretRight /></a>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className="blog-item">
                                <img src={Blog2} alt="" className='w-100' />
                                <h5>19 Jan 2022</h5>
                                <h3>How one Webflow user grew his single person consultancy from $0-100K in 14      months</h3>
                                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <a href="#">Read More <FaCaretRight /></a>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className="blog-item">
                                <img src={Blog3} alt="" className='w-100' />
                                <h5>19 Jan 2022</h5>
                                <h3>How one Webflow user grew his single person consultancy from $0-100K in 14      months</h3>
                                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <a href="#">Read More <FaCaretRight /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blog