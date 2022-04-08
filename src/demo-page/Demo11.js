import React from 'react'
import Iframe from 'react-iframe'
const URI3 = 'https://weather-api-tempiltin.netlify.app/'
const Demo11 = () => {
  return (
    <>
    <Iframe  className='Iframe weter' src={URI3} frameborder="0" />
    </>
  )
}

export default Demo11