import React from 'react'
import './headerA.scss'

const HeaderA = () => {
  return (
    <>
      <header className="HeaderArticle">
        <div className="container pt_Nav">
          <div className="row justify-content-around">
            <div className="col-lg-9 ">
              <h2 >Who is a web programmer ?</h2>
              <div className="row">
                <div className="col-12">
                  <p className='PTitle'>
                    Web developer - mainly develops web applications, web sites and web applications running in the browser. Web developers are also divided into 3 types: <br /> <hr />
                    <strong> 1) </strong><a className='CMS' href="#!">Front-End programmer
                      <div className='CMSFor'>
                        1) Front-end programmers at least:

                        - HTML / CSS / Bootstrap

                        - JavaScript / jQuery

                        - Sass / LESS

                        - Version control / GIT

                        - Photoshop / Sketch / Figma

                        must have mastered technologies such as
                      </div>
                    </a>  <span> </span> - prepares the client part of the website, ie the part that is visible to users. And again, these would mean that you have to spend for these processes. Everything you see on the site (design, elements, blocks, animations) is done by Front-End programmers. <br />

                    <hr />


                    <strong>  2) </strong> <a className='CMS' href="#!"> Back-End programmer
                      <div className='CMSFor'>
                        2) Back-end programmers at least:

                        - JavaScript technologies (Node.js / Express.Js)

                        Or

                        - PHP / Yii / Laravel

                        Or

                        - Python / Django

                        - OOP (Object Oriented Programming)

                        - MySql / MongoDB / PostgreSQL

                        - Version control / Git

                        must have mastered technologies such as
                      </div>
                    </a> <span> </span> - prepared the server part of the website. It’s a little harder than the Front-End. That is, the programmer forms the basic logic of the site. Program the activities performed on the site (registration, database work, online payments).<br />
                    <hr />
                    <strong>  3) </strong> <a className='CMS' href="#!">    Full-Stack programmer
                      <div className='CMSFor'>
                        3) A Full-Stack programmer should be familiar with one or more of the following stacks:

                        - MERN stack (MongoDB / Express.js / React.js / Node.js)

                        - MEVN stack (MongoDB / Express.js / Vue.js / Node.js)

                        - Python / Django / Flask

                        - Version control / Git
                      </div>
                    </a>
                    - A programmer who has mastered both Front-End and Back-End. That is, he can do everything on his own. Of course, such programmers are in high demand. <br />

                    <hr />



                  </p>


                </div>
              </div>
              
            </div>
           
          </div>
        </div>
      </header>

    </>
  )
}

export default HeaderA