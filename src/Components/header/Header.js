import React from 'react';
import './header.scss';

import { Container, } from 'react-bootstrap';
import {FiFacebook , FiInstagram , FiLinkedin,FiGithub} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import Typist from 'react-text-typist';
import Bnner from '../../assets/images/slider/banner-01.png';


function Header() {



    return (
        <header className='header_top'>
          
            <Container className='pt_Nav'>
                <div className='row'>
                    <div className='order-md-2 order-2 order-lg-1 col-lg-7  col-12'>
                        <h5 className='header_h5' data-aos="zoom-out-up">OLAMIMGA XUSH KELIBSIZ</h5>
                        <h1 className='header_h1' data-aos="zoom-out-up">Salom, Men <span>Temur</span></h1>
                        <div className="typesss">
                        <Typist sentences={['Web Developer', 'Front-end Developer', 'Back-end Developer']} className="transition" loop={false} />
                        </div>
                        <p className='header_p' data-aos="flip-left">
                        Zamonaviy veb-ilovalar ko'pincha uch yoki undan ortiq darajalarni o'z ichiga oladi va ishlab chiquvchi ishlayotgan jamoaning hajmiga qarab, u ushbu darajalarning bir yoki bir nechtasiga ixtisoslashishi yoki ko'proq fanlararo rol o'ynashi mumkin. Veb-ishlab chiquvchi odatda front-end veb-ishlab chiquvchisi yoki back-end veb-ishlab chiquvchisi sifatida tasniflanadi.
                        </p>

                        <div className='row'>
                            <div className=" col-lg-12 ">
                                <span className='header_find' data-aos="zoom-in">MENI TOPISHINGIZ MUMKIN</span>
                                <ul className='ul_header' data-aos="fade-up-right">
                                    <li>
                                        <a href="https://m.me/TemurbekShukurov0707" target=' _blank'>
                                           <FiFacebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/tempiltin99/" target=' _blank'>
                                            <FiInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/temurbek-shukurov-941b92224/" target=' _blank'>
                                            <FiLinkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:temurbekshukurov0707@gmail.com" target=' _blank'>
                                            <HiOutlineMail />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/webiratium" target=' _blank'>
                                            <FiGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div   className="order-md-1 order-1 order-lg-2 col-lg-5 col-12 ">
                        <div className="thumbnail" data-aos="fade-down-left">
                            <div  className="inner" data-aos="fade-up-left">
                                <img  src={Bnner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header