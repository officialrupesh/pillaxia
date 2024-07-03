import Image from "next/image"
import Header from "./Header"
import { HeroSectionWrapper } from "./styled-components/common.styled"
import Link from "next/link"

const HeroSection = () => {
  return (
    <>
      <HeroSectionWrapper className="hero-section-wrapper">
          <Header />
        <div className="container">
          <section className="hero-section-container row">
            <div className="col-12 col-lg-8">
              <div className="d-flex">
                <div className="path-bg d-flex align-items-center">
                  <div className="dot-before"></div>
                  <h6>Your Path to better health</h6>
                  <div className="dot-before"></div>
                </div>
              </div>

              <div className="section-header" style={{ marginBottom:"25px" }}>
                <h2 style={{ color: "#000000" }}>Transform medication managament with <span>Pillaxia</span></h2>
                <p className="hero-section-desc" style={{ fontSize: "1.6rem", color:"#333B52" }}>
                  Seamlessly manage medications with confidence, through enhanced daily adherence and fostering collaboration among patients, caregivers, and healthcare providers. Experience a healthier, more connected care journey with Pillaxia.
                </p>
              </div>
              <a href="#">
                <button className="btn btn-join" style={{ marginBottom: "80px", minWidth: "260px", minHeight: "56px" }}>
                  Get Started
                </button>
              </a>
              <div>
                <div className="associated-programs-wrapper">
                <h6 className="fw-medium">Pillaxia has participated in a number of programmes and accelerators</h6>
                  <div className="associated-programs d-flex flex-wrap gap-3 justify-content-center justify-cotent-md-start">
                    <Link href={"#"} className="associated-program">
                      <Image className="img-fluid" src={"/images/associated-program-1.png"} alt="associated program logo" height={55} width={170} />
                    </Link>
                    <Link href={"#"} className="associated-program">
                      <Image className="img-fluid" src={"/images/associated-program-1.png"} alt="associated program logo" height={55} width={170} />
                    </Link>
                    <Link href={"#"} className="associated-program">
                      <Image className="img-fluid" src={"/images/associated-program-1.png"} alt="associated program logo" height={55} width={170} />
                    </Link>

                 </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-lg-4 d-lg-block d-none">
              <div className="hero-img d-flex justify-content-center align-items-center">
                <Image className="img-fluid" src={"/images/hero-img.png"} alt="Hero section image" height={625} width={340}/>

              </div>

            </div>
          </section>

        </div>

      </HeroSectionWrapper>
    </>
  )
}
export default HeroSection