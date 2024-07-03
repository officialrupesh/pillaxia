import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewSectionWrapper } from "./styled-components/common.styled";
import Image from "next/image";

const ReviewSection = () => {



    const settings = {
        adaptiveHeight: true,
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
        appendDots: (dots: any) => (
            <div style={{
                borderRadius: "10px",
                padding: "10px"
            }}>
                <ul className="custom-dots d-flex justify-content-center"> {dots} </ul>

            </div>
        ),
        customPaging: (i: any) => (
            <div>
            </div>
        )
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
                            <div className="review-box d-flex align-items-center">

                                <div className="reviewer-img">
                                    <Image src={'/images/reviewer-img.png'} alt="reviewer image" height={190} width={160} />
                                </div>
                                <div className="reviewer-details">
                                    <h4 className="fw-bold">
                                        Debbie Hagenes
                                    </h4>
                                    <p className="fw-medium" style={{ color: "#B9C8F3", fontSize: "16px" }} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                    <h5 className="fw-normal d-flex flex-wrap align-items-center" style={{ color: "#B9C8F3",gap:"16px" }}><Image height={28} width={140}  alt="ratings" src={"/images/rating-star.png"}/> 5.0 rating</h5>


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