import Link from "next/link";
import { FooterWrapper } from "./styled-components/Footer.styled";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../public/images/icons/Icons";

const Footer = () => {
    return (
        <>
            <FooterWrapper className="footer-wrapper    ">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-4 col-12  mb-4">
                                <Image alt="logo" src="/images/logo.png" width={170} height={70} sizes="100vw" />
                                <p>Pillaxia's mission is to cultivate a sustainable ecosystem of care and support 
                                    to elevate global health standards by making advanced, intuitive medication management
                                     accessible to all, and transforming medication management into a more supportive journey.
                                </p>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="row g-4 text-center text-sm-start">
                                    <div className=" col-12 col-sm-6 col-md-4 footer-item">
                                        <h3>Useful Links</h3>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link href={"#"}>Home</Link>
                                            </li>
                                            <li>

                                                <Link href={"#"}>About Us</Link>
                                                
                                            </li>
                                            <li><Link href={"#"}>Services</Link>
                                                </li>
                                            <li><Link href={"#"}>Blog</Link></li>
                                            <li> <Link href={"#"}>Contact Us</Link></li>
                                        </ul>  
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 footer-item">
                                        <h3>Card Section</h3>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link href={"#"}>FAQs</Link>
                                            </li>
                                            <li>

                                                <Link href={"#"}>Support</Link>

                                            </li>
                                            <li><Link href={"#"}>How it works</Link>
                                            </li>
                                            <li><Link href={"#"}>Terms & conditions</Link></li>
                                            <li> <Link href={"#"}>Privacy policy</Link></li>
                                        </ul>
                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 footer-item">
                                        <h3>Contact us</h3>
                                        <ul className="list-unstyled mb-3">
                                            <li>
                                                <Link href={"mailto:connect@pillaxia.com"} >connect@pillaxia.com</Link>
                                            </li>
                                            <li>

                                                <Link href={"tel:+1-900-123 4567"}>+1-900-123 4567</Link>

                                            </li>
                                        </ul>
                                        <div className="d-flex gap-4 justify-content-center justify-content-sm-start social-media-wrapper">
                                            <Link href={"#"} className="social-media-item d-flex justify-content-center align-items-center">
                                                <FacebookIcon />
                                            </Link>
                                            <Link href={"#"} className="social-media-item d-flex justify-content-center align-items-center">
                                                <LinkedinIcon />
                                            </Link>
                                            <Link href={"#"} className="social-media-item d-flex justify-content-center align-items-center">
                                                <InstagramIcon />
                                            </Link>

                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <p className="footer-copyright-section text-center">
                    Copyright © 2024. All Rights Reserved.
                </p>

            </FooterWrapper>
        </>
    )
}
export default Footer