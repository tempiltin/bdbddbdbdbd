import React from 'react'
import "../../Styles/MobileNAvbar/MobileStyle.css"
import {Link} from "react-router-dom"
const MobileNavbar = () => {
  return (
    <div className="mobile_navbar_bottom">
        <ul className='d-flex align-items-center'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>Home</Link></li>
        </ul>
    </div>
  )
}

export default MobileNavbar