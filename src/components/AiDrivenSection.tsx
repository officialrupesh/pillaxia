import Link from "next/link"
import { AiDrivenSectionStyled } from "./styled-components/AiDrivernSection.styled"
import Image from "next/image"
import { BallotCheckIcon, BellIcon, ShareIcon, TrackIcon } from "../../public/images/icons/Icons"
import ScrollAnimation from "react-animate-on-scroll"

const AiDrivenSection = () => {
    return (
        <>
            <AiDrivenSectionStyled>

                <div className="ai-driven-wrapper">
                    <div className="container">
                        
                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0} className="smooth-animate section-header text-center">
                            <h2>AI - <span>Driven</span></h2>
                            <p>Let Angela handle your medication scheduling</p>

                        </ScrollAnimation>

                        <div className="section-body">
                            <div className="row g-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <ScrollAnimation animateIn="ZoomOutUp" delay={0} className="smooth-animate-quick feature-wrapper">
                                        <div className="feature-header d-flex align-items-center">
                                            <div className="feature-icon d-flex justify-content-center align-items-center">
                                                <BellIcon />
                                            </div>
                                            <h5>Personalised Reminders</h5>

                                        </div>
                                        <p className="feature-body">
                                            simplify care for complex conditions and ensure adherence

                                        </p>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="ZoomOutUp" delay={200} className="smooth-animate-quick feature-wrapper mb-0">
                                        <div className="feature-header d-flex align-items-center">
                                            <div className="feature-icon d-flex justify-content-center align-items-center">
                                                <TrackIcon />
                                            </div>
                                            <h5>Track Adherence</h5>

                                        </div>
                                        <p className="feature-body">
                                            Track medication intake and adherence in real-time, ensuring that users take their prescribed doses at the right times.

                                        </p>
                                    </ScrollAnimation>


                                </div>
                                <div className="col-12 col-md-6 col-lg-4 d-none d-lg-block">
                                    <ScrollAnimation animateIn="bounceInRight" delay={1} className="smooth-animate  features-display-screen">
                                        <Image className="img-fluid" src={'/images/features-screen-bg.png'} height={625} width={340} alt="features screen"/>
                                    </ScrollAnimation>
                                    

                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <ScrollAnimation animateIn="ZoomOutUp" delay={400} className="smooth-animate-quick feature-wrapper">
                                        <div className="feature-header d-flex align-items-center">
                                            <div className="feature-icon d-flex justify-content-center align-items-center">
                                                <BallotCheckIcon />
                                            </div>
                                            <h5>Record & Track Symptoms</h5>

                                        </div>
                                        <p className="feature-body">
                                            Pillaxia's Symptoms and side effects tracker allows for the systematic logging of health details over time, providing users and their care team with valuable insights into how medications are affecting them and facilitating more informed medical decisions.
                                        </p>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="ZoomOutUp" delay={600} className="smooth-animate-quick feature-wrapper">
                                        <div className="feature-header d-flex align-items-center">
                                            <div className="feature-icon d-flex justify-content-center align-items-center">
                                                <ShareIcon />
                                            </div>
                                            <h5>Share the Journey</h5>

                                        </div>
                                        <p className="feature-body">
                                            Adherence data collected by  Angela can be shared with healthcare providers, offering valuable insights into patient compliance and enabling more informed care decisions.
                                        </p>
                                    </ScrollAnimation>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="app-download-section">
                    <div className="container">
                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0} className="smooth-animate section-header text-center" style={{ marginBottom: "30px" }}>
                            <h2>
                                <span>Best way to</span> manage your your Health Recovery.
                            </h2>
                            <p>Create an account and get started using Pillaxia, with full access </p>

                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" delay={1} className="download-links-wrapper d-flex flex-wrap justify-content-center ">
                            <Link href={"#"} className="d-inline-block">
                                <Image src={"/images/appstore.png"} alt="app store icon" height={57} width={201} />
                            </Link>
                            <Link href={"#"} className="d-inline-block">
                                <Image src={"/images/playstore.png"} alt="playstore icon" height={57} width={201} />
                            </Link>

                        </ScrollAnimation>


                    </div>

                </div>
            </AiDrivenSectionStyled>
        </>
    )
}
export default AiDrivenSection