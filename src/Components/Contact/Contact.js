import React from 'react'
import './contact.scss'
import '../header/header.scss'
import {FiFacebook , FiInstagram , FiLinkedin,FiGithub} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import CLIENT from '../../assets/images/client/client.jpg'
const Contact = () => {
    return (
        <main>
            <div className='pt_Nav container'>
                <div className="col-lg-12">
                    <div className="sectionTitle text-center">
                        <span className="subtitle">Contact</span>
                        <h2 className="title">Contact With Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src={CLIENT} alt="" />
                            </div>
                            <div className="title-area">
                                <h4 className="title">Nevine Acotanza</h4>
                                <span>Chief Operating Officer</span>
                            </div>
                            <div className="description">
                                <p>
                                    I am available for freelance work. Connect with me via and call in to my account.
                                </p>
                                <span className="phone">Phone: <a href="tel:337074105">+998 (33) 707 41 05</a></span>
                                <span className="mail">Email: <a href="mailto:temurbekshukurov0707@gmail.com">temurbekshukurov0707@gmail.com</a></span>
                            </div>
                            <span className='header_find' data-aos="zoom-in">FIND WITH ME</span>
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
            </div>
        </main>
    )
}

export default Contact