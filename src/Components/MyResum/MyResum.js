
import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Education from './Education/Education'
import Skilis from './Siklis/Skilis'
import Port from './Portfolio/Port'
import './myresum.scss'
const MyResum = () => {
    return (
        <>
            <section id='MyResum'>
                <div className="container">
                  
                    <div className="row">
                        <div className="col-12">
                            <div className="sectionTitle text-center">
                                <span className="subtitle">1+ YIL TAJRIBA</span>
                                <h2 className="title">Rezyume</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="myres mb-3" >
                                <Tab eventKey="home" title="Ta'lim" >
                                    <Education />
                                </Tab>
                                <Tab eventKey="professional" title="Texn/lar ">
                                  <Skilis />
                                </Tab>
                                <Tab eventKey="experience" title="Tajriba" >
                                    <Port />
                                </Tab>

                            </Tabs>
                        </div>
                    </div>
                    <hr className='Hrm'/>
                </div>
            </section>
        </>
    )
}

export default MyResum