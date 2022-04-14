import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './carusel.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules

import IMG from '../../assets/images/tech/html.jpg'
import IMG1 from '../../assets/images/tech/css.jpg'
import IMG2 from '../../assets/images/tech/js.jpg'
import IMG3 from '../../assets/images/tech/jquery.jpg'
import IMG4 from '../../assets/images/tech/bootstrap.jpg'
import IMG5 from '../../assets/images/tech/swiper.jpg'
import IMG6 from '../../assets/images/tech/wowjs.jpg'
import IMG7 from '../../assets/images/tech/HEROKU.jpg'
import IMG8 from '../../assets/images/tech/netlify.jpg'
import IMG9 from '../../assets/images/tech/node.jpg'
import IMG10 from '../../assets/images/tech/mongo.jpg'
import IMG11 from '../../assets/images/tech/react.jpg'
import IMG12 from '../../assets/images/tech/materialise.jpg'



const characters = '99999964546126512AB-C-DE-F3-45-GHI-JK34-5L-MN-O-PQ-R3565-685-stu-vwx-yz01-234-56-7-89';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
const uid = generateString(99)
// console.log(generateString(99));

const data = [
    {
        id: uid,
        img: IMG
    },
    {
        id: uid,
        img: IMG1
    },
    {
        id: uid,
        img: IMG2
    },
    {
        id: uid,
        img: IMG3
    },
    {
        id: uid,
        img: IMG4
    },
    {
        id: uid,
        img: IMG5
    },
    {
        id: uid,
        img: IMG6
    },
    {
        id: uid,
        img: IMG7
    },
    {
        id: uid,
        img: IMG8
    },
    {
        id: uid,
        img: IMG9
    },
    {
        id: uid,
        img: IMG10
    },
    {
        id: uid,
        img: IMG11
    },
    {
        id: uid,
        img: IMG12
    },
]

const Carusel = () => {
    return (
        <>
            <div className="container">
            <div className="row">
                    <div className="col-lg-12">
                        <div className="sectionTitle text-center">
                            <span className="subtitle">Texnologiya</span>
                            <h2 className="title"> Texnologiya</h2>
                            <hr />
                            
                            <hr className='mb-5'/>
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        data.map(({img , id}) => {
                            return (
                                <SwiperSlide key={Math.floor(Math.random() * 100000000000)}>
                                    <div  className="portCard">
                                        <div className="zom">
                                            <img key={id}  src={img} alt={id} />
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }

                </Swiper>
            </div>
        </>
    )
}

export default Carusel