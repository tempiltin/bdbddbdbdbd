import React from 'react'
import IMG1 from '../../assets/images/portfolio/back1.png'
import IMG2 from '../../assets/images/portfolio/back2.png'
import IMG3 from '../../assets/images/portfolio/back3.png'

const data = [
    {
        id: 1,
        name: 'Chat Cord',
        image: IMG1,
    },
    {
        id: 2,
        name: 'Chat Cord',
        image: IMG2,
    },
    {
        id: 3,
        name: 'BookSto',
        image: IMG3,
    },
]
const BackFor = () => {
  return (
    <>
                 {
                        data.map(({ image, name, id }) => {
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

export default BackFor