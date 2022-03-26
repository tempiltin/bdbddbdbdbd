import React from 'react';
import './services.css';
import ImgP from '../../assets/images/portfolio/portfolio-01.jpg';
import { BiLike } from 'react-icons/bi';
import { Link } from "react-router-dom"
const data = [
    {
        id: 1,
        see: 249,
        name: 'Click-clone',
        image: ImgP,
        title: 'tempiltin ',

        demo: '/demo-1'

    },
    {
        id: 2,
        see: 249,
        name: 'Web site',
        image: ImgP,
        title: 'tempiltin ',

        demo: '/demo-1'
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
                                <span className="subtitle">Visit my portfolio and keep your feedback</span>
                                <h2  className="title">My Portfolio</h2>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        {
                            data.map(({ image, title, name, demo, like, id }) => {
                                return (
                                    <div  key={id} className="col-lg-6  col-xl-4 col-md-6 col-12">
                                        <div className="rn-portfolio">
                                            <div className="inner">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src={image} alt=""></img>
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <div className="category-info">
                                                        <div className="category-list">
                                                            <a href=" #!">{name}</a>
                                                        </div>
                                                        <div className="meta">
                                                            <a href=" #!"><BiLike className='Like' /></a> <span> {like}</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="title"><Link to={demo} target="_blank ">{title}</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default ServicesTem;