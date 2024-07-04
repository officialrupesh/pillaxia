import Image from "next/image"
import Header from "./Header"
import { HeroSectionWrapper } from "./styled-components/common.styled"
import Link from "next/link"
import ScrollAnimation from "react-animate-on-scroll"
import { ArrowRightIcon } from "../../public/images/icons/Icons"

const HeroSection = () => {
  return (
    <>
      <HeroSectionWrapper className="hero-section-wrapper">
          <Header />
        <div className="container">
          <section className="hero-section-container row">
            <div className="col-12 col-lg-8">
              <ScrollAnimation className="d-flex"  animateIn="slideInDown" duration={2}>
                <div className="path-bg d-flex align-items-center">
                  <div className="dot-before"></div>
                  <h6>Your Path to better health</h6>
                  <div className="dot-before"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation   animateIn="slideInUp"  className="section-header" style={{ marginBottom:"25px" }}>
                <h2 style={{ color: "#000000" }}>Transform medication managament with <span>Pillaxia</span></h2>
                <p className="hero-section-desc" style={{ fontSize: "1.6rem", color:"#333B52" }}>
                  Seamlessly manage medications with confidence, through enhanced daily adherence and fostering collaboration among patients, caregivers, and healthcare providers. Experience a healthier, more connected care journey with Pillaxia.
                </p>
              </ScrollAnimation>
              <ScrollAnimation   animateIn="bounceInLeft" duration={2} delay={4}>
                <a href="#">
                  <button className="btn btn-join btn-size-lg" style={{ marginBottom: "80px" }}>
                    Get Started <span className="ms-3"><ArrowRightIcon /> </span>
                  </button>
                </a>
              </ScrollAnimation>
              <ScrollAnimation  initiallyVisible={true} >
                <div className="associated-programs-wrapper">
                <h6 className="fw-medium">Pillaxia has participated in a number of programmes and accelerators</h6>
                  <div className="associated-programs d-flex flex-wrap gap-3 justify-content-center justify-cotent-md-start">
                    <Link href={"#"} className="associated-program">
                      <Image className="img-fluid" src={"/images/associated-program-1.png"} alt="associated program logo" height={55} width={170} />
                    </Link>
                    <Link href={"#"} className="associated-program">
                      <Image className="img-fluid" src={"/images/thriv-logo.png"} alt="associated program logo" height={55} width={170} />
                    </Link>
                    <Link href={"#"} className="associated-program">
                      <Image className="img-fluid" src={"/images/frontier-logo.png"} alt="associated program logo" height={55} width={170} />
                    </Link>
                   

                 </div>
                </div>
              </ScrollAnimation>

            </div>
            <ScrollAnimation  animateIn="bounceInDown" duration={2}  className="col-12 col-lg-4 d-lg-block d-none">
              <div className="hero-img d-flex justify-content-center align-items-center">
                <Image className="img-fluid" src={"/images/hero-img.png"} alt="Hero section image" height={625} width={340}/>

              </div>

            </ScrollAnimation>
          </section>

        </div>

      </HeroSectionWrapper>
    </>
  )
}
export default HeroSection