import React from 'react'
import Panel from '../Components/Eloquent/Store/Panel'
import IMG from '../assets/images/about/cover.jpg'
import './pagefor.scss'
const Eloquen = () => {
    return (
        <>
            <main>

                <div className="container pt_Nav">
                   <div className="row justify-content-around">
                   <div className="col-lg-5 bg-img-img">
               
                         <img src={IMG} alt="" />
                    </div>
                    <div className="col-lg-3 Panel-scroll">
                        <Panel />
                    </div>
                   </div>
                </div>
            </main>
        </>
    )
}

export default Eloquen