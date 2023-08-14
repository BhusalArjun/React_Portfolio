import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Portfolios = () => {

    const portfolioSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const projectiList = [
        {
            title: 'Billing System',
            content: ' Using C progamming Language in Second Semester Project  lorem Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Web Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio1.png'
        },
        {
            title: 'Dogs Nepal',
            content: 'Using PHP in fourth Semester Project lorem Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Web Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio2.jpg'
        },
        {
            title: 'E-Commerce - Online Clothing Store',
            content: ' Using Wordpress in Fifth Semester Project  lorem Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Web Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio3.jpg'
        },
        {
            title: 'Canteen Managment System',
            content: 'Group Project in Aadim Innoviation using Anguar and Springboot',
            projectType: 'Web Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio4.png'
        },
        {
            title: 'Electro Store &  Repair',
            content: ' Using React and Springboot in 6th Semester Project Lorem Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Custom CMS Blog',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio5.jpg'
        },
      
        {
            title: 'Comming Soon',
            content: 'Running lorem Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: '',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio6.jpg'
        }
    ]

    return (
        <section className="portfolios">
            <div className="section__heading">
                <h4>My Work</h4>
                <h2>See My Portfolio</h2>
            </div>
            <div className="section__body">
                <div className="portfolios_list">
                    <Slider {...portfolioSettings}>
                        {
                            projectiList.map((item, index) => {
                                return (
                                    <div key={index} className="portfolios_item">
                                        <div className="portfolios_thumbnail">
                                            <img src={item.image} alt={item.title} loading="lazy" />
                                        </div>
                                        <div className="portfolios_description">
                                            <span>{item.projectType}</span>
                                            <h4>{item.title}</h4>
                                            <p>{item.content}</p>
                                            <Link to="/portfolios">View Case Study</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Portfolios;