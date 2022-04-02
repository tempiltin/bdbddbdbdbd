import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './Skilis.scss'
import '../Education/Edu.scss'
const Skilis = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6  col-md-6 col-12">
                    <div className="progress-wrapper">
                        <div className="content">
                            <span className="subtitle">Features</span>
                            <h4 className="maintitle">Front end</h4>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">HTML</div>
                                <div className="progresst">
                                    <ProgressBar completed={90} />
                                </div>
                            </div>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">CSS</div>
                                <div className="progresst">
                                    <ProgressBar completed={85} />
                                </div>
                            </div>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">Javascript</div>
                                <div className="progresst">
                                    <ProgressBar completed={45} />
                                </div>
                            </div>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">Jquery</div>
                                <div className="progresst">
                                    <ProgressBar completed={75} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6  col-md-6 col-12">
                    <div className="progress-wrapper">
                        <div className="content">
                            <span className="subtitle">Features</span>
                            <h4 className="maintitle">Back end</h4>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">Node.js</div>
                                <div className="progresst">
                                    <ProgressBar completed={60} />
                                </div>
                            </div>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">Express.js</div>
                                <div className="progresst">
                                    <ProgressBar completed={68} />
                                </div>
                            </div>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">MongoDB</div>
                                <div className="progresst">
                                    <ProgressBar completed={80} />
                                </div>
                            </div>
                            <div className="progress-charts">
                                <div className="Lang heading  heading-h6">React</div>
                                <div className="progresst">
                                    <ProgressBar completed={35} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skilis