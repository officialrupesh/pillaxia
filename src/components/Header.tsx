import Image from "next/image"
import HeaderStyled from "./styled-components/Header.styled"
import Link from "next/link"
import { ArrowRightIcon } from "../../public/images/icons/Icons"

const Header = () => {
  return (
    <>

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
    </>
  )
}
export default Header