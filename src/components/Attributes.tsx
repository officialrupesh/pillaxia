import Image from "next/image"
import AttributesStyled from "./styled-components/Attributes.styled"
import ScrollAnimation from "react-animate-on-scroll"
import data from "../../data"

const Attributes = () => {
    return (
        <>
            <AttributesStyled>
                <div className="container">
                    <div className="smooth-animate section-header text-center">
                        <h2><span>The Future of </span> Medication Management</h2>
                        <p>Empowering your health journey with every reminder</p>

                    </div>

                    <div className="row g-5 me-0">
                        {
                            data?.attributeData?.map((attribute, index) => {
                                return (
                                    <>
                                        <div className="col-12 col-lg-4 col-md-6 smooth-animate">
                                            <div className="card-wrapper d-flex flex-column justify-content-start align-items-center">
                                                <div className="card-img d-flex justify-content-center align-items-center">
                                                    <Image src={attribute?.cardIcon} alt="card image" width={50} height={50} />
                                                </div>
                                                <h5 className="card-title fw-semibold">{attribute?.cardTitle}</h5>
                                                <p className="card-details text-center">
                                                    {attribute?.cardDescription}
                                                </p>

                                            </div>
                                        </div>
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