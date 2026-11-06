import React from "react";
import image from '.././assets/p1.jpg'
import image1 from '.././assets/p2.jpg'
import image2 from '.././assets/p3.jpg'
import image3 from '.././assets/p4.jpg'
import './portfolio.css'


const Portfolio = () => {
    return (
        <>
            <div className="port">
                <h1>Projects We've Deliverd</h1>
                <div className="container">
                    <div className="row">
                        <div className="port-text">
                            <p>Over the past 10 years, we have designed and built a wide
                                range of high-quality products from scratch. Our team has finished various web and mobile
                                apps related to various spheres including e-learning,
                                healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</p>
                        </div>


                        <div className="industry-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="industry-left">
                                            <p>INDUSTRY</p>

                                            <h1>REVIVE</h1>

                                            <h4>Revive Beauty Salon & Institute</h4>

                                            <div className="industry-service">
                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>WEB DEVELOPMENT</p>
                                                </div>

                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>QUALITY ASSURANCE</p>
                                                </div>
                                            </div>

                                            <div className="industry-icons">
                                                <span>⚛</span>
                                                <span>aws</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="industry-right">
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                 <div className="col-6">
                                        <div className="industry-right">
                                            <img src={image1} alt="" />
                                        </div>
                                    </div>
                                <div className="col-6">
                                        <div className="industry-left">
                                            <p>INDUSTRY</p>

                                            <h1>REVIVE</h1>

                                            <h4>Revive Beauty Salon & Institute</h4>

                                            <div className="industry-service">
                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>WEB DEVELOPMENT</p>
                                                </div>

                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>QUALITY ASSURANCE</p>
                                                </div>
                                            </div>

                                            <div className="industry-icons">
                                                <span>⚛</span>
                                                <span>aws</span>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-6">
                                        <div className="industry-left">
                                            <p>INDUSTRY</p>

                                            <h1>REVIVE</h1>

                                            <h4>Revive Beauty Salon & Institute</h4>

                                            <div className="industry-service">
                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>WEB DEVELOPMENT</p>
                                                </div>

                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>QUALITY ASSURANCE</p>
                                                </div>
                                            </div>

                                            <div className="industry-icons">
                                                <span>⚛</span>
                                                <span>aws</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="industry-right">
                                            <img src={image2} alt="" />
                                        </div>
                                    </div>
                                 <div className="col-6">
                                        <div className="industry-right">
                                            <img src={image3} alt="" />
                                        </div>
                                    </div>
                                <div className="col-6">
                                        <div className="industry-left">
                                            <p>INDUSTRY</p>

                                            <h1>REVIVE</h1>

                                            <h4>Revive Beauty Salon & Institute</h4>

                                            <div className="industry-service">
                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>WEB DEVELOPMENT</p>
                                                </div>

                                                <div className="service-item">
                                                    <span>▤</span>
                                                    <p>QUALITY ASSURANCE</p>
                                                </div>
                                            </div>

                                            <div className="industry-icons">
                                                <span>⚛</span>
                                                <span>aws</span>
                                            </div>
                                        </div>
                                    </div>
                           

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="support">
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <h1>
                            <span className="black">Feel Free to </span>
                        <span className="blue">Contact </span>
                        <span className="black">Us By Submitting </span>
                        <br />
                        <span className="blue">Form Or Contact Live Support</span>
                        </h1>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}
export default Portfolio