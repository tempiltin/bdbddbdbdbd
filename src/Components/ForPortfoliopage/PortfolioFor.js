import React from 'react'
import '../services/services.scss'
import IMG1 from '../../assets/images/portfolio/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio/portfolio5.jpg';
import IMG6 from '../../assets/images/portfolio/portfolio6.jpg';
import IMG7 from '../../assets/images/portfolio/portfolio7.jpg';
import IMG8 from '../../assets/images/portfolio/portfolio8.jpg';
import IMG9 from '../../assets/images/portfolio/portfolio9.jpg';
import IMG10 from '../../assets/images/portfolio/portfolio10.jpg';
import { BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BackFor from './BackFor';
const data = [
    {
        id: 1,
        seen: 315,
        name: 'Click-clone',
        image: IMG1,
        demo: '/demo-1',
        aos: 'zoom-in-down'

    },
    {
        id: 2,
        seen: 400,
        name: 'Trevland',
        image: IMG2,
        demo: '/demo-2',
        aos:'zoom-out-up'

    },
    {
        id: 3,
        seen: 280,
        name: 'AUTO-CLUB',
        image: IMG3,
        demo: '/demo-3',
        aos:'zoom-in-left'
    },
    {
        id: 4,
        seen: 304,
        name: 'React js ',
        image: IMG4,
        demo: '/demo-4',
        aos:'zoom-out-right'
    },
    {
        id: 5,
        seen: 101,
        name: 'Max Proff ',
        image: IMG5,
        demo: '/demo-5',
        aos:'zoom-out-left'
    },
    {
        id: 6,
        seen: 243,
        name: 'Minshop',
        image: IMG6,
        demo: '/demo-6',
        aos:'zoom-out-right'
    },
    {
        id: 7,
        seen: 111,
        name: 'X-book',
        image: IMG7,
        demo: '/demo-7',
        aos:'zoom-out-left'
    },
    {
        id: 8,
        seen: 307,
        name: 'Flex-start',
        image: IMG8,
        demo: '/demo-8',
        aos: 'zoom-in-down'
    },
    {
        id: 9,
        seen: 200,
        name: 'Computer and mobile',
        image: IMG9,
        demo: '/demo-9',
        aos:'zoom-out-up'
    },
    {
        id: 10,
        seen: 269,
        name: 'My Website',
        image: IMG10,
        demo: '/demo-10',
        aos: 'zoom-in-down'
    },
]
const PortfolioFor = () => {
    return (
        <>
            <div className="container pt_Nav">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sectionTitle text-center">
                            <span className="subtitle">Portfelimga tashrif buyuring va fikr-mulohazalaringizni saqlang</span>
                            <h2 className="title">Mening portfelim</h2>
                            <hr />
                            <span className="subtitle">Front end</span>
                            <hr className='mb-5'/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    {
                        data.map(({ image, name, demo,aos, seen, id }) => {
                            return (
                                <div key={id} data-aos={aos} className="col-lg-4  col-xl-4 col-md-6 col-12 mmb">
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
                                                <Link to={demo} target="_blank " className="button">Jonli Ko'rish</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sectionTitle text-center">
                            <hr />
                            <span className="subtitle">Back end</span>
                          <hr />
                        </div>



                    </div>
                </div>
                <div className="row justify-content-md-center">
               <BackFor />
                </div>

            </div>
        </>
    )
}

export default PortfolioFor