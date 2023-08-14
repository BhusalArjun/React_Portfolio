import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const handImageUrl = process.env.PUBLIC_URL + 'assets/images/hand.png';
    const banneImageUrl = process.env.PUBLIC_URL + 'assets/images/banner-man-one.png';

    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="banner__content">
                            <div className="section__heading">
                                <h4>Web Developer</h4>
                                <h2>
                                    Hey! I am <img src={handImageUrl} alt="Code with Binod" loading="lazy" />
                                    <span className="color-red">Bhusal Arjun</span>
                                </h2>
                                <p>I'm creative Web Developer in Nepal, and I'm very passsionate and dedicated to my work.</p>
                                <Link to='/book-appointment' className="banner__content-link">Want to Connect</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner__thumbnail">
                            <img src={banneImageUrl} alt="Code with Binod" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;