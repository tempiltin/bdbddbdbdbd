import React from 'react'
import './header.scss'
import LOGO from '../../assets/images/logo/favicon.png'
import { Container, Navbar, } from 'react-bootstrap'
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from "react-router-dom"
const NaV = () => {
    return (
        <div>
            <Navbar expand="lg" className='Navbar_fixed'>
                <div className="MyContainer">
                    <Container fluid className='d-flex align-items-center justify-content-between'>
                        <Navbar.Brand to="/">
                            <div className="header_logo" data-aos="fade-up">
                                <img src={LOGO} alt="" /> <strong className='StrongName'>Tempiltin</strong>
                            </div>
                        </Navbar.Brand>

                        <ul className='Nav_ul d-none d-lg-none d-xl-flex'>
                            <li className='Nav_ul_li'><Link to="/" className='Nav_ul_li_a'> Home</Link></li>
                            <li className='Nav_ul_li'><Link to="/article" className='Nav_ul_li_a'> Article</Link></li>
                            <li className='Nav_ul_li'><Link to="/features" className='Nav_ul_li_a'> Features</Link></li>
                            <li className='Nav_ul_li'><Link to="/portfolio" className='Nav_ul_li_a'> Portfolio</Link></li>
                            <li className='Nav_ul_li'><Link to="/resume" className='Nav_ul_li_a'> Resume</Link></li>
                            <li className='Nav_ul_li'><Link to="/clients" className='Nav_ul_li_a'> Clients</Link></li>
                            <li className='Nav_ul_li'><Link to="/pricing" className='Nav_ul_li_a'> Pricing</Link></li>
                            <li className='Nav_ul_li'><Link to="/blog" className='Nav_ul_li_a'> Blog</Link></li>
                            <li className='Nav_ul_li'><Link to="/contact" className='Nav_ul_li_a'> Contact</Link></li>
                        </ul>
                        <div className="Navbar_right">
                            <a href="#!" className="Navbar_right_a d-none d-lg-none d-xl-flex"> BUY NOW</a>
                        </div>
                        <div className="NavButton d-flex d-xl-none">
                            <AiOutlineBars className='NavButton-icon' />
                        </div>
                    </Container>
                </div>
            </Navbar>
        </div>
    )
}

export default NaV