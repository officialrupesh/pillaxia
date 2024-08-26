import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewSectionWrapper } from "./styled-components/common.styled";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import data from "../../data";

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
        customPaging: () => (
            <div>
            </div>
        )
    };

    return (
        <>
            <ReviewSectionWrapper>

                <div className="container">
                    <ScrollAnimation  animateIn="fadeInUp" duration={2} delay={0} className="section-header text-center smooth-animate">
                        <h2 color="#02004B">
                            Customer's Reviews
                        </h2>
                        <p>What Our Customers Are Saying</p>

                    </ScrollAnimation>
                    <Slider {...settings}>
                        {
                            data?.reviewData?.map((review,index)=>{
                                return (
                                    <>
                                        <div key={index} className="review-box-wrapper d-flex justify-content-center">
                                            <ScrollAnimation animateIn="fadeIn" duration={2} className=" smooth-animate review-box d-flex align-items-center">

                                                <ScrollAnimation animateIn="fadeIn" duration={2} delay={100} className="reviewer-img smooth-animate">
                                                    <Image src={review?.reviewerImg} alt="reviewer image" height={190} width={160} />
                                                </ScrollAnimation>
                                                <div className="reviewer-details">
                                                    <h4 className="fw-bold">
                                                        {review?.reviewerName}
                                                    </h4>
                                                    <p className="fw-medium" style={{ color: "#B9C8F3", fontSize: "16px" }} >{review?.reviewersReview}</p>
                                                    <h5 className="fw-normal d-flex flex-wrap align-items-center" style={{ color: "#B9C8F3", gap: "16px" }}><Image height={28} width={140} alt="ratings" src={review?.starImg} /> {review?.starValue}</h5>


                                                </div>

                                            </ScrollAnimation>
                                        </div>
                                    </>
                                )
                            })
                        }
                     





                    </Slider>
                </div>
            </ReviewSectionWrapper>

        </>
    );
}
export default ReviewSection