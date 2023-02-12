
import "../../Styles/Navbar/Navbar.css";
// import data from "../../DB/Navbar"
import ValutePrice from './ValutePrice';
import Weather from "./Weather";
const Navbar = () => {

  return (
    <header className="header_navbar d-flex align-items-center ">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <ul className='d-flex p-0 m-0'>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
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