import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "../../public/images/icons/Icons"
import { HeaderStyled, MobileHeaderStyled } from "./styled-components/Header.styled"
import Hamburger from "../../public/images/icons/Hamburger"
import { useEffect, useState } from "react"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>

    <div className="container">
        <HeaderStyled className="d-flex justify-content-between align-items-center">
        <div className="logo">
            <Image className="img-fluid" src={"/images/logo-primary.png"} height={70} width={170} alt="logo"/>
        </div>
        <div className="header-right d-flex align-items-center justify-content-center">
                <ul className="nav-section list-unstyled d-flex">
                    <li><Link href={"#"}>Home</Link></li>
                      <li><Link href={"#"}>About us</Link></li>
                      <li><Link href={"#"}>Services</Link></li>
                      <li><Link href={"#"}>Contact Us</Link></li>
                </ul>
            <div className="nav-section">
            </div>
            <button className=" btn btn-join">
                Join us <span className="ms-2"><ArrowRightIcon /></span>

            </button>

        </div>

    </HeaderStyled>
    </div>
      <MobileHeaderStyled className="d-flex justify-content-between align-items-center container"> 
        <div className="logo">
          <Image className="img-fluid" src={"/images/logo-primary.png"} height={70} width={170} alt="logo" />
        </div>
        <div onClick={handleClick}>
          <Hamburger isOpen={isNavOpen} onClick={handleClick} />
        </div>
        
        <div className={`nav-section d-flex flex-column align-items-center justify-content-center ${isNavOpen ?'open':''}`}>
          <div onClick={handleClick} style={{ position:"fixed",color:"#fff",insetBlockStart:"calc(1.6 * 1rem * 2)",right:"22px" }}>
            <Hamburger isOpen={isNavOpen} onClick={handleClick} />
          </div>
          <ul className=" list-unstyled d-flex flex-column align-items-center">
            <li><Link href={"#"}>Home</Link></li>
            <li><Link href={"#"}>About us</Link></li>
            <li><Link href={"#"}>Services</Link></li>
            <li><Link href={"#"}>Contact Us</Link></li>
          </ul>
          <button className=" btn btn-join">
            Join us <span className="ms-2"><ArrowRightIcon /></span>
          </button>

        </div>

    </MobileHeaderStyled>
    </>
  )
}
export default Header