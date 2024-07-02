import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewSectionWrapper } from "./styled-components/common.styled";
import Image from "next/image";

const ReviewSection = () => {



    const settings = {
        // adaptiveHeight: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <>
            <ReviewSectionWrapper>

                <div className="container">
                    <div className="section-header text-center">
                        <h2 color="#02004B">
                            Customer's Reviews
                        </h2>
                        <p>What Our Customers Are Saying</p>

                    </div>
                    <Slider {...settings}>
                        <div className="review-box-wrapper d-flex justify-content-center">
                            <div className="review-box" style={{ padding: "48px" }}>
                                <div className="reviewer-name">
                                    <h3 className="fw-700">
                                        Debbie Hagenes
                                    </h3>


                                </div>

                            </div>
                        </div>
                        <div className="review-box-wrapper d-flex justify-content-center">
                            <div className="review-box" style={{ padding: "48px" }}>
                                <div className="reviewer-img">
                                    <Image src={'/images/reviewer-img.png'} alt="reviewer image" height={190} width={160}/>

                                </div>
                                <div className="reviewer-name">
                                    <h3 className="fw-700">
                                        Debbie Hagenes
                                    </h3>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                    <h5>5.0 rating</h5>


                                </div>

                            </div>
                        </div>
                      
                    </Slider>
                </div>
            </ReviewSectionWrapper>

        </>
    );
}
export default ReviewSection