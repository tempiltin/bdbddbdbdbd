import React from 'react';
import './services.scss';
import IMG1 from '../../assets/images/portfolio/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio/portfolio3.jpg';
import { BsEyeFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
const data = [
    {
        id: 1,
        seen: 315,
        name: 'Click-clone',
        image: IMG1,

        demo: '/demo-1'

    },
    {
        id: 2,
        seen: 400,
        name: 'Trevland',
        image: IMG2,
        demo: '/demo-2'
    },
    {
        id: 3,
        seen: 289,
        name: 'AUTO-CLUB',
        image: IMG3,
        demo: '/demo-3'
    }
]
function ServicesTem() {
    return (
        <>
            <section id='portflio' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sectionTitle text-center">
                                <span className="subtitle">Portfelimga tashrif buyuring va fikr-mulohazalaringizni saqlang</span>
                                <h2  className="title">Mening portfelim</h2>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-md-center">
                        {
                            data.map(({ image,  name, demo, seen, id }) => {
                                return (
                                    <div  key={id} className="col-lg-4  col-xl-4 col-md-6 col-12 mmb">
                                        <div className="rn-portfolio">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href='#!'>
                                                        <img src={image} alt=""></img>
                                                    </a>
                                                </div>
                                                <hr />
                                                <div className="content">
                                                    <div className="category-info">
                                                        <div className="category-list">
                                                            <a href=" #!">{name}</a>
                                                        </div>
                                                        <div className="meta">
                                                            <a href=" #!" className='Seen'><span> {seen}</span> <BsEyeFill className='sdn'  /></a> 
                                                        </div>
                                                    </div>
                                                    <hr />
                                                   <Link to={demo} target="_blank " className="button">Jonli Ko'rish</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                     <div className="row justify-content-end">
                      <hr className='HR'/>

                      <div className="col-auto">
                      <Link to="/portfolio"  className="button btn_m">Portfolio</Link>
                      </div>
                     </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServicesTem;