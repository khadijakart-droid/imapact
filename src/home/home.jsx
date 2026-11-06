import React from "react";
import image from '.././assets/baner.jpg'
import './home.css'


const Home = () => {
    return (
        <>
            <div className="Banner">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="banner-background">
                                <img src={image} alt="banner" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="banner-content">
                                <h1>We are full Services</h1>
                                <h2>Digital Marketing Agency</h2>
                                <h3>Welcome to the Digital Impacts</h3>
                                
                                    <p>
                                        We partner with our clients with a team of professionals, we are able to provide
                                        the best on our side. We strive to be leaders in digital marketing services worldwide
                                        by revolutionizing the industry and setting new standards of professionalism and success.
                                    </p>
                                    <a href="#" class="message-btn">Message Us Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Home