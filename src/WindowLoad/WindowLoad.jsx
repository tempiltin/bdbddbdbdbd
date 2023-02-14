import React, { useEffect, useState } from 'react'
import "../Styles/winLoad/winLoad.css"
const WindowLoad = () => {
    const [state, setState] = useState(true)
    useEffect(() => {
        window.addEventListener("load", () => {
            setTimeout(() => {
                setState(false)
            },[])
        })
    }, [])
    console.log(state)
    return <>

        {
            state ? <div className="winLoading">
                <div className="load">
                    Loading
                    <div className="dote">
                        <span className='dote1'>.</span>
                        <span className='dote2'>.</span>
                        <span className='dote3'>.</span>
                    </div>
                </div>
            </div> : ""
        }
        <script src="./Win.js"></script>
    </>
}

export default WindowLoad