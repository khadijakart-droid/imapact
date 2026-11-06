import React from "react";
import image from '.././assets/commerce.jpg'
import image1 from '.././assets/education.jpg'
import image2 from '.././assets/estate.jpg'
import image3 from '.././assets/hospital.jpg'
import image4 from '.././assets/health.jpg'
import image5 from '.././assets/tech.jpg'
import './service.css'


const Service = () => {
    return (
        <>
            <div className="service">
                <div className="heading">
                    <h1>
                        <span className="black">We </span>
                        <span className="blue">Provide </span>
                        <span className="black">The Best </span>
                        <br />
                        <span className="black">Services With </span>
                        <span className="blue">Our</span>
                        <br />
                        <span className="blue"> Developers</span>
                    </h1>
                </div>
            </div>

            <div className="card-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <h2>Digital Marketing</h2>
                                <div className="icon">✧</div>
                                <p>
                                    The Digital Impacts have compiled a list of the best
                                    digital marketing companies in the world.
                                </p>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <h2>Web Development</h2>
                                <div className="icon">♧</div>
                                <p>
                                    Web design services comprise the process of user interface
                                    (UI) and user experience (UX) design of any web-based solution.
                                </p>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <h2>Graphic Designing</h2>
                                <div className="icon">▤</div>
                                <p>
                                    Create visual concepts to communicate ideas that inspire
                                    and captivate consumers, creative thinking, an aptitude
                                    towards art and design.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <h2>Content Writer</h2>
                                <div className="icon">✎</div>
                                <p>
                                    That content can include blog posts,
                                    video or podcast scripts, ebooks or whitepapers,
                                    press releases, product category descriptions,
                                    landing page or social media
                                </p>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <h2>SEO</h2>
                                <div className="icon">⌕</div>
                                <p>
                                    Help search engines find, crawl,
                                    and index your content efficiently.
                                    The website can become easily findable,
                                    more relevant and popular towards user search querie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="industry">
                <div className="heading">
                      <h1>
                        <span className="black">Industries We</span>
                        <br />
                        <span className="blue"> Work With</span>
                    </h1>
                    <p>We work as a technology partner for various industries
                        <br />
                       Our expertise can be applied to the specific demands
                       <br />
                       and nuances in your industry</p>
                </div>

            </div>

            <div className="icons">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="iconpic">
                                 <img src={image} alt="" />
                                 <h4>REAL ESTATE</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="iconpic">
                                 <img src={image1} alt="" />
                                 <h4>EDUCATION</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="iconpic">
                                 <img src={image2} alt="" />
                                 <h4>COMMERCE</h4>
                            </div>
                        </div>
                        </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="iconpic">
                                 <img src={image3} alt="" />
                                 <h4>HOSPITALITY</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="iconpic">
                                 <img src={image4} alt="" />
                                 <h4>HEALTHCARE</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="iconpic">
                                 <img src={image5} alt="" />
                                 <h4>FINTECH</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}
export default Service