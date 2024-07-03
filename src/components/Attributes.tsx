import Image from "next/image"
import AttributesStyled from "./styled-components/Attributes.styled"
import ScrollAnimation from "react-animate-on-scroll"

const Attributes = () => {
    return (
        <>
            <AttributesStyled>
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp" duration={2} delay={0} className="smooth-animate section-header text-center">
                        <h2><span>Unique Attributes</span> of Pillaxia</h2>
                        <p>Create an account and get started using Pillaxia, with full access </p>

                    </ScrollAnimation>

                    <div className="row g-5">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={500} className="col-12 col-lg-4 col-md-6 smooth-animate">
                            <div className="card-wrapper d-flex flex-column justify-content-center align-items-center">
                                <div className="card-img d-flex justify-content-center align-items-center">
                                    <Image src={"/images/user-centric 1.png"} alt="card image" width={50} height={50} />
                                </div>
                                <h5 className="card-title fw-semibold">User-Centric</h5>
                                <p className="card-details text-center">
                                    Designed with the end-user in mind, Pillaxia is intuitive and easy to navigate,
                                    making it accessible to individuals of all ages.
                                </p>

                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={700} className="col-12 col-lg-4 col-md-6 smooth-animate">
                            <div className="card-wrapper d-flex flex-column justify-content-center align-items-center">
                                <div className="card-img d-flex justify-content-center align-items-center">
                                    <Image src={"/images/user-centric 1.png"} alt="card image" width={50} height={50} />
                                </div>
                                <h5 className="card-title fw-semibold">User-Centric</h5>
                                <p className="card-details text-center">
                                    Designed with the end-user in mind, Pillaxia is intuitive and easy to navigate,
                                    making it accessible to individuals of all ages.
                                </p>

                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={900} className="col-12 col-lg-4 col-md-6 smooth-animate">
                            <div className="card-wrapper d-flex flex-column justify-content-center align-items-center">
                                <div className="card-img d-flex justify-content-center align-items-center">
                                    <Image src={"/images/user-centric 1.png"} alt="card image" width={50} height={50} />
                                </div>
                                <h5 className="card-title fw-semibold">User-Centric</h5>
                                <p className="card-details text-center">
                                    Designed with the end-user in mind, Pillaxia is intuitive and easy to navigate,
                                    making it accessible to individuals of all ages.
                                </p>

                            </div>
                        </ScrollAnimation>

                    </div>

                </div>

            </AttributesStyled>
        </>
    )
}
export default Attributes