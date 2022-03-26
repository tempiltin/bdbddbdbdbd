import React from 'react';
import './header.scss';

import { Container, } from 'react-bootstrap';
import {FiFacebook , FiInstagram , FiLinkedin,FiGithub} from 'react-icons/fi';
import {RiTelegramLine} from 'react-icons/ri';
import Typist from 'react-text-typist';
import Bnner from '../../assets/images/slider/banner-01.png';


function Header() {



    return (
        <header className='header_top'>
          
            <Container className='pt_Nav'>
                <div className='row'>
                    <div className='order-md-2 order-2 order-lg-1 col-lg-7 '>
                        <h5 className='header_h5' data-aos="zoom-out-up">WELCOME TO MY WORLD</h5>
                        <h1 className='header_h1' data-aos="zoom-out-up">Hi, I’m <span>Timur</span></h1>
                        <div className="typesss">
                        <Typist sentences={['Web Developer', 'Front-end Developer', 'Back-end Developer']} className="transition" loop={false} />
                        </div>
                        <p className='header_p' data-aos="flip-left">Modern web applications often include three or more levels, and depending on the size of the team the developer is working on, he or she may specialize in one or more of these levels or play a more interdisciplinary role. A web developer is usually classified as a front-end web developer or a back-end web developer.</p>

                        <div className='row'>
                            <div className=" col-lg-12">
                                <span className='header_find' data-aos="zoom-in">FIND WITH ME</span>
                                <ul className='ul_header' data-aos="fade-up-right">
                                    <li>
                                        <a href="#!">
                                           <FiFacebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <FiInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <FiLinkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <RiTelegramLine />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <FiGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div   className="order-md-1 order-1 order-lg-2 col-lg-5 ">
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