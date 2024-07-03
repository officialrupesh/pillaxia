import data from "../../data"
import { ChoosePillaxiaStyled } from "./styled-components/ChoosePillaxia.styled"
import { PillaxiaWorkWrapper } from "./styled-components/common.styled"

const ChoosePillaxia = () => {
    return (
        <>

            <ChoosePillaxiaStyled>
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose <span>Pillaxia</span></h2>
                        <p>Pillaxia is your all-in-one health management app designed to empower you to take charge of your well-being. Our intuitive platform helps you monitor, manage, and improve your health through a range of innovative features tailored to meet your unique needs.</p>
                    </div>
                    <div className="video-wrapper">
                        <video width="100%" height="100%"  loop controls>
                            <source src="https://media.istockphoto.com/id/1531482014/video/smart-phone-mobile-receiving-mail-message-email-notification-woman-employee-use-mobile-phone.mp4?s=mp4-640x640-is&k=20&c=MlrAbTVDclvT8f-dyS5goiNvy0kTOB0RuCov_rDGbBw=" type="video/mp4"></source>

                        </video>

                    </div>
                </div>
            </ChoosePillaxiaStyled>

            <PillaxiaWorkWrapper>
                <div className="container">
                    <div className="section-header text-center">
                        <h2><span>How</span> Pillaxia works</h2>
                        <p>3 easy steps</p>
                    </div>
                    <div className="row g-4">
                        {
                            data.workingSteps.map((item, index) => (
                                <>
                                    <div className="col-12 col-md-6 col-lg-4 ">
                                        <div className="card-steps-wrapper h-100">
                                            <div className="card-step-header d-flex">
                                                <div className="card-step-count d-flex justify-content-center align-items-center me-3">
                                                    {item?.stepNumber}
                                                </div>
                                                <h6 className="card-step-title fw-semibold ">
                                                    {item?.title}
                                                </h6>

                                            </div>
                                            <div className="card-step-body">
                                                {
                                                    item?.bodyTitle &&
                                                    <h6 className="fw-semibold">{item?.bodyTitle}</h6>
                                                }
                                                {item?.description}



                                            </div>

                                        </div>
                                    </div>

                                </>
                            ))
                        }


                    </div>

                </div>

            </PillaxiaWorkWrapper>
        </>
    )
}
export default ChoosePillaxia