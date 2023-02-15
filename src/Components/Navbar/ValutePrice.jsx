import React, { useEffect, useState } from 'react'
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

const ValutePrice = () => {
    const [data, setData] = useState({});
    const ValutaFonction = () => {
        fetch("https://nbu.uz/uz/exchange-rates/json/")
            .then((response) => response.json())
            .then((data) => setData(data.find(item => item.code === "USD"))).catch(error => console.log(error))
    }
    useEffect(() => {
        Promise.all([
            ValutaFonction()
        ])

        //===============================================================================



    }, [])
    return (
        <ul className='d-flex p-0 m-0'>
              <li className='p_temp-2'>{data.title}</li>
              <li className='p_temp-2'>$ 1 &nbsp;=&nbsp;
                {data.nbu_buy_price} so'm &nbsp;
                {data.nbu_buy_price >= 11000 ? <BsArrowUpRight /> : <BsArrowDownRight />}

              </li>

            </ul>
    )

}

export default ValutePrice









