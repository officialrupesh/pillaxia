import { ChoosePillaxiaStyled } from "./styled-components/ChoosePillaxia.styled"

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
        </>
    )
}
export default ChoosePillaxia