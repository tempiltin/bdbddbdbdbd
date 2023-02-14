import React from 'react';
import { Link } from "react-router-dom"
import "../../Styles/Header/Header.css"
import TopHeader from "../../DB/TopHeader"
console.log(TopHeader)
const Header = () => {

    const headerStyle = {
        background: `url(${TopHeader.bg_image}) no-repeat center center / cover`
    }
    const proflieStyle = {
        background: `url(${TopHeader.profile_image}) no-repeat center center / cover`
    }
    return <header className='header_center_profile'>
        <div className="container">
            <div className="row mt-4">
                <div className=" col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="ui_block">
                        <div className="top_header" style={headerStyle}>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </div>
                        <div className="profile_about">
                            <div className="row p-3 justify-content-between align-items-center">
                                <div className="col-lg-5">
                                    <ul className="d-flex p-0 m-0 align-items-center">
                                        <li className='p_temp-2'>
                                            <Link to="/">Timeline</Link>
                                        </li>
                                        <li className='p_temp-2'>
                                            <Link to={'/'}>About</Link>
                                        </li>
                                        <li className='p_temp-2'>
                                            <Link to={'/'}>Maqola</Link>
                                        </li>
                                        <li className='p_temp-2'>
                                            <Link to={'/'}>Standart Javascript</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2">
                                    <div className="card_position">
                                        <div className="card_img_folder">

                                            <div className='img' style={proflieStyle}></div>
                                        </div>
                                        <h1 className='header_title'>{TopHeader.name}</h1>
                                        <h6 className='header_title_span'>{TopHeader.city}</h6>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <ul className="d-flex p-0 m-0 align-items-center">
                                        <li className='p_temp-2'>
                                            <Link to="/">Timeline</Link>
                                        </li>
                                        <li className='p_temp-2'>
                                            <Link to={'/'}>About</Link>
                                        </li>
                                        <li className='p_temp-2'>
                                            <Link to={'/'}>Maqola</Link>
                                        </li>
                                        <li className='p_temp-2'>
                                            <Link to={'/'}>Standart Javascript</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header