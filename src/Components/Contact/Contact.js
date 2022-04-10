import React from 'react'
import './contact.scss'
import '../header/header.scss'
import {FiFacebook , FiInstagram , FiLinkedin,FiGithub} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import CLIENT from '../../assets/images/client/client.jpg'

import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b7bm8zb', 'template_329l5lj', form.current, 'cXXCdmgCA4k5Gj-6Q')
    e.target.reset()
  };



    return (
        <main>
            <div className='pt_Nav container'>
                <div className="col-lg-12">
                    <div className="sectionTitle text-center">
                        <span className="subtitle">Contact</span>
                        <h2 className="title">Men bilan bog'laning</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 contarea">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src={CLIENT} alt="" />
                            </div>
                            <div className="title-area">
                                <h4 className="title">Shukurov Temurbek</h4>
                                <span>Web dasturchi</span>
                            </div>
                            <div className="description">
                                <p>
                                Men mustaqil ish uchun tayyorman. orqali men bilan bog'laning va hisobimga qo'ng'iroq qiling.
                                </p>
                                <span className="phone">Phone: <a href="tel:337074105">+998 (33) 707 41 05</a></span>
                                <span className="mail">Email: <a href="mailto:temurbekshukurov0707@gmail.com">temurbekshukurov0707@gmail.com</a></span>
                            </div>
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
                    <div className="col-lg-7">
                        <div className="contact-form-wrapper">
                            <div className="introduce">
                                <form ref={form} onSubmit={sendEmail} className='row '>
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                          <label htmlFor="contact-name" className="contact-name">SIZNING ISMINGIZ</label>
                                          <input type="text" id='contact-name' name='contact-name'/>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-phone">TELEFON RAQAMINGIZ</label>
                                            <input  name="contact-phone" id="contact-phone" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-email">ELEKTIRON POCHTA MANZILINGIZ</label>
                                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="subject">QAYSI MAVZUDA YOZMOQCHISIZ</label>
                                            <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-message">XENGA XABAR YOZING</label>
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button  name="submit" type="submit" id="submit" className="btn button">
                                          XABARNI YUBORISH
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact