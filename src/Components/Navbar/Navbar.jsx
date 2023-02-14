
import { Link } from "react-router-dom";
import "../../Styles/Navbar/Navbar.css";
// import data from "../../DB/Navbar"
import ValutePrice from './ValutePrice';
import Weather from "./Weather";
import { GiSevenPointedStar } from "react-icons/gi"
const Navbar = () => {

  return (
    <header className="header_navbar d-flex align-items-center ">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
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
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>
                <select name="languages" id="languages" className="p-1">
                  <option value="uz">uz</option>
                  <option value="en">en</option>
                </select>
              </li>
            </ul>
          </div>

          <div className="col-auto">
            <ValutePrice />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar