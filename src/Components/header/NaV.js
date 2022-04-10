import React, { useState } from "react";
import "./header.scss";
import LOGO from "../../assets/images/logo/favicon.png";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";

const NaV = () => {
  const [state, setState] = useState(false);

  const Navclick = (e) => {
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const NavButton = (e) => {
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };


  return (
    <>
      <Navbar expand="lg" className="Navbar_fixed">

        <div className="MyContainer">
          <Container fluid className="d-flex align-items-center justify-content-between">
            <Navbar.Brand to="/" className="brand-img">
              <div className="header_logo" >
               <Link to="/">
               <img src={LOGO} alt="" />{" "}
                <strong className="StrongName">Tempiltin</strong>
                </Link>
              </div>
            </Navbar.Brand>

            <ul className="Nav_ul d-none d-lg-none d-xl-flex">
              <li className="Nav_ul_li">
                <Link to="/" className="Nav_ul_li_a">Bosh sahifa</Link>
              </li>
              <li className="Nav_ul_li">
                <Link to="/article" className="Nav_ul_li_a">Maqola</Link>
              </li>
              <li className="Nav_ul_li">
                <Link to="/portfolio" className="Nav_ul_li_a">Portfel</Link>
              </li>
              <li className="Nav_ul_li">
                <Link to="/contact" className="Nav_ul_li_a">Contact</Link>
              </li>
            </ul>
            <div className="Navbar_right">
              <Link to="/sayt-yaratish-77fb9e2c-3f7f-4660-945c-08793e82e3a6" className="Navbar_right_a d-none d-lg-none d-xl-flex" >Sayt yaratish</Link>
            </div>
            <div className="NavButton d-flex d-xl-none">
              <AiOutlineBars onClick={Navclick} className="NavButton-icon" />
            </div>
          </Container>
        </div>
      </Navbar>
      <div onClick={NavButton} className={state ? "navbarRight d-flex d-xl-none" : "navbarRightFalse"} >
        <div className="opasty-width"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto">
              <div className="NavButton ">
                <AiOutlineBars
                  onClick={NavButton}
                  className="NavButton-icon NavButton-close"
                />
              </div>
            </div>
            <hr />
          </div>
          <div className="row justify-content-around">
            <div className="col-11 scrol-Y">
              <ul className=" Close-ul">
              <hr />
                <li className="Nav_ul_li">
                  <Link to="/" className="button">Bosh sahifa</Link>
                </li>
                <hr />
                <li className="Nav_ul_li">
                  <Link to="/article" className="button">Maqola </Link>
                </li>
                <hr />
                <li className="Nav_ul_li">
                  <Link to="/portfolio" className="button">Portfel</Link>
                </li>
                <hr />
                <li className="Nav_ul_li">
                  <Link to="/contact" className="button">Contact</Link>
                </li>
                <hr />
                <li className="Nav_ul_li">
                  <Link to="/sayt-yaratish-77fb9e2c-3f7f-4660-945c-08793e82e3a6" className="button">Sayt yaratish</Link>
                </li>
                <hr />
              </ul>
            </div>
          </div>
          <div className="row justify-content-around">
           <div className="col-11 ">
           <div className="footer_">
           <a className="text-reset fw-bold footer-cp" href="https://www.tempiltin.uz/">Shukurov Temurbek</a>
           </div>
           </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NaV;
