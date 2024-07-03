import Image from "next/image"
import { ContactSectionStyled } from "./styled-components/ContactSection.styled"
import { PillaxiaWorkWrapper } from "./styled-components/common.styled"
import data from "../../data"
import ScrollAnimation from "react-animate-on-scroll"

const ContactSection = () => {
    return (
        <>
            <ContactSectionStyled>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <ScrollAnimation animateIn="fadeInUp" duration={2} delay={0} className="smooth-animate section-header ">
                                <h2><span>Contact</span> Us</h2>
                                <p>Start with Pillaxia today</p>

                            </ScrollAnimation>
                            <div className="contact-img">
                                <Image className="img-fluid" src={"/images/contact-avatar.png"} alt="contact avatar" height={500} width={430} layout="100vw" />
                            </div>
                        </div>
                        <ScrollAnimation animateIn="fadeInRight" duration={2} className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <div className="form-wrapper">
                                <div className="form-item d-flex flex-column">
                                    <label id="fullName"><p>Full Name</p></label>
                                    <input name="fullName" />
                                </div>

                                <div className="form-item d-flex flex-column">
                                    <label id="email"><p>Email Address</p></label>
                                    <input name="email" type="email" />
                                </div>

                                <div className="form-item d-flex flex-column">
                                    <label id="subject"><p>Subject</p></label>
                                    <input name="subject" type="text" />
                                </div>

                                <div className="form-item d-flex flex-column">
                                    <label id="message"><p>Your Message</p></label>
                                    <textarea name="message" style={{ minHeight: "120px" }} />

                                </div>

                                <button className="w-100 btn btn-gradient">Submit</button>

                            </div>

                        </ScrollAnimation>

                    </div>

                </div>
            </ContactSectionStyled>
        </>
    )
}
export default ContactSection