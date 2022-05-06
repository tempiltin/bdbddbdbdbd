import React from 'react'
import IMG1 from '../../assets/images/portfolio/asd.jfif'
import IMG2 from '../../assets/images/portfolio/back2.jpg'
import IMG3 from '../../assets/images/portfolio/back3.jpg'
import IMG4 from '../../assets/images/portfolio/back4.jpg'
import Dev from './dev'

const data = [
    {
        id: 1,
        name: 'Chat Cord',
        image: IMG1,
        aos:'zoom-in-down'
    },
    {
        id: 2,
        name: 'Chat Cord',
        image: IMG2,
        aos:'zoom-out-up'
    },
    {
        id: 3,
        name: 'BookSto',
        image: IMG3,
        aos:'zoom-in-down'
    },
    {
        id: 4,
        name: 'Proxy Server',
        image: IMG4,
        aos:'zoom-out-up'
    },
    
]

const BackFor = () => {
  return (
    <>
                 {
                        data.map(({ image, name, aos, id,demo }) => {
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
                                                 
                                                   
                                                </div>
                                                <hr />
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                <Dev />
               
    
    </>
  )
}

export default BackFor