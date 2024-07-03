import Image from "next/image"
import AttributesStyled from "./styled-components/Attributes.styled"
import ScrollAnimation from "react-animate-on-scroll"
import data from "../../data"

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
                        {
                            data?.attributeData?.map((attribute, index) => {
                                return (
                                    <>
                                        <ScrollAnimation animateIn="fadeIn" animateOut="bounceInLeft" delay={(index*200) + 300} className="col-12 col-lg-4 col-md-6 smooth-animate">
                                            <div className="card-wrapper d-flex flex-column justify-content-center align-items-center">
                                                <div className="card-img d-flex justify-content-center align-items-center">
                                                    <Image src={attribute?.cardIcon} alt="card image" width={50} height={50} />
                                                </div>
                                                <h5 className="card-title fw-semibold">{attribute?.cardTitle}</h5>
                                                <p className="card-details text-center">
                                                    {attribute?.cardDescription}
                                                </p>

                                            </div>
                                        </ScrollAnimation>
                                    </>
                                )
                            })
                        }


                    </div>

                </div>

            </AttributesStyled>
        </>
    )
}
export default Attributes