import React from 'react'
import './testimonials.scss'
import Carousel from './Carousel/Carousel'
const Testimonials = () => {
    return (
        <>
            <section id='Testimonials'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sectionTitle text-center">
                                <span className="subtitle">WHAT CLIENTS SAY</span>
                                <h2 className="title">Testimonial</h2>
                                <Carousel />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Testimonials