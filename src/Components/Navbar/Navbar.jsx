
import { Link } from "react-router-dom";
import "../../Styles/Navbar/Navbar.css";
// import data from "../../DB/Navbar"
import ValutePrice from './ValutePrice';
import { BsListStars } from "react-icons/bs"
import Weather from "./Weather";
import { GiSevenPointedStar } from "react-icons/gi"
import { useState } from "react";
const Navbar = () => {
  const [state, setState] = useState(false);

  const handleBarFunction = () => {
    if (state) {
      setState(false)
    } else {
      setState(true)
    }
  }
  return (
    <>
      <header className="header_navbar d-flex align-items-center ">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto d-lg-none">
              <li className='p_temp-2'>
                <Link to={'/'}>tempiltin.uz</Link>
              </li>
            </div>
            <div className="col-auto d-lg-flex d-none ">
              <ul className='d-flex p-0 m-0'>
                <li className='p_temp-2'>
                  <Link to={'/'}>tempiltin.uz</Link>
                </li>

                <li className='p_temp-2'>
                  <Link to={'/weather'}>Weather</Link>
                </li>
                <li className='p_temp-2'>
                  <Link to={'/valyuta-kurslari'}>Valyuta kurslari</Link>
                </li>
                <li className='p_temp-2'>
                  <Link to={'/nomoz-vaqtlari'}>Nomoz vaqtlari</Link>
                </li>
                <li className='p_temp-2 '>
                  <Link to={"/chat-bot"} className="d-flex align-items-center">Chat Bot  <GiSevenPointedStar className="galochka" /></Link>
                </li>
                <li className='p_temp-2'>
                  <select name="languages" id="languages" className="p-1">
                    <option value="uz">uz</option>
                    <option value="en">en</option>
                  </select>
                </li>
              </ul>
            </div>

            <div className="col-auto d-lg-flex d-none ">
              <ValutePrice />
            </div>
          </div>
        </div>
      </header>
      <button className="aside_main d-flex d-lg-none" onClick={handleBarFunction}>
        <BsListStars />
      </button>
      <aside className={state ? "aside_right_bar bar_true d-lg-none d-flex" : "aside_right_bar bar_false d-lg-none d-flex"} >
        <button className="aside_main " onClick={handleBarFunction}>
          <BsListStars />
        </button>
      </aside>
    </>
  )
}

export default Navbar