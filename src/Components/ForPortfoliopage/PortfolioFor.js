import React from 'react'
import '../services/services.scss'
import IMG1 from '../../assets/images/portfolio/portfolio1.png';
import IMG2 from '../../assets/images/portfolio/portfolio2.png';
import IMG3 from '../../assets/images/portfolio/portfolio3.png';
import IMG4 from '../../assets/images/portfolio/portfolio4.png';
import IMG5 from '../../assets/images/portfolio/portfolio5.png';
import IMG6 from '../../assets/images/portfolio/portfolio6.png';
import { BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
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
    },
    {
        id: 4,
        seen: 289,
        name: 'React js ',
        image: IMG4,
        demo: '/demo-4'
    },
    {
        id: 5,
        seen: 289,
        name: 'Max Proff ',
        image: IMG5,
        demo: '/demo-5'
    },
    {
        id: 6,
        seen: 289,
        name: 'Minshop',
        image: IMG6,
        demo: '/demo-6'
    },
]
const PortfolioFor = () => {
    return (
        <>
            <div className="container pt_Nav">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sectionTitle text-center">
                            <span className="subtitle">Visit my portfolio and keep your feedback</span>
                            <h2 className="title">My Portfolio</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    {
                        data.map(({ image, name, demo, seen, id }) => {
                            return (
                                <div key={id} className="col-lg-4  col-xl-4 col-md-6 col-12 mmb">
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
                                                        <a href=" #!" className='Seen'><span> {seen}</span> <BsEyeFill className='sdn' /></a>
                                                    </div>
                                                </div>
                                                <hr />
                                                <Link to={demo} target="_blank " className="button">Live Demo</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PortfolioFor