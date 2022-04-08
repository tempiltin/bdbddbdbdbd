import React from 'react'
import { Link } from 'react-router-dom'
import IMG5 from '../../assets/images/portfolio/back5.png'
const dev = () => {
    const date1 = [
        {
            id: 1,
            name: 'Weather API ',
            image: IMG5,
            aos:'zoom-in-down',
            demo:'/demo-11'
        },
    ]
  return (
    <>
    {
            date1.map(({ image, name, aos, id,demo }) => {
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
                                        <Link to={demo} target="_blank " className="button">Live Demo</Link>
                                       
                                    </div>
                                    <hr />
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default dev