import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText } from 'reactstrap';
import Skills from "../present/Skills"

const ThePast = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const indentLarge = () => <a className="indentLarge"></a>

    return (
        <>
            <div className="detailsCard pageBody">
                <div className="">
                    <a className="indent"></a>
                    <div className="subText">
                        <a className="biggerFont"><a className="indent"></a>We </a>are currently in the...</div>
                    <div className="marginBottom60">
                        <h1 className="headlineText borderBottom marginBottom3"><a className="indentLarge"></a>"Past"</h1>
                    </div>
                </div>
                <CardText className="marginTop">
                    <section className="flex-row-wrap">
                        <img className="logo" src={require("../img/NSS-icon.jpeg")} />
                        <div>
                            <div className="subText bold">Nashville Software School</div>
                            <div className="subTitle marginBottom20">Jan 2020 to Present</div>
                        </div>
                    </section>
                    {/* <a className="indent"></a> */}
                    <ul className="resumeDetails marginBottom">
                        <li>Full-time Full-Stack Team-Intensive Bootcamp. </li>
                        <li>Front End Development using HTML, CSS, Javascript and React.</li>
                        <li>Back  End Development with Python and Django.</li>
                        <li>Utilized third party APIs (JSON Server, The Movie Database) for web apps.</li>
                        <li>Responsible for CRUD functionality in individual and group projects.</li>
                        <li>Leveraged Slack and Zoom for remote study and group projects.</li>
                        <li>Secure code version control using Git / Github.</li>
                        <li>Project Management with Github Projects and Trelo.</li>
                    </ul>
                </CardText>


                <section className="sectionHeader">
                    <div className="headlineText2 marginTop borderBottom"><a className="indentLarge"></a>Apps</div>
                    <div className="subText bold marginBottom borderBottom">{indentLarge()} Individual Projects</div>
                </section>

                <div id="hipstar-v2">
                    <section onClick={toggle} id="" className="project-section marginTop ">
                        <div className="skillsSection boxShadow ">
                            <div className="project-card-header">
                                <img className="hipstar" src={require("../img/django-icon.png")} />
                                <img className="hipstar" src={require("../img/react-icon.png")} />
                            </div>
                            <div className="project-card card-font ">h!pst@r v.2</div>
                            <div className="project-card-content">
                                <b>h!pst@r</b> is a movie rating and recommendation site which connects users based on mutual distaste. Using The Movie Database (TMD) external API, users are able to search for movies, add them to their Love or Hate list, and leave a review.
                        </div>
                        </div>
                    </section>
                </div>

                <div id="hipstar-vi">
                    <section onClick={toggle} id="" className="project-section marginTop ">
                        <div className="skillsSection boxShadow ">
                            <div className="project-card-header">
                                <img className="hipstar" src={require("../img/react-icon.png")} />
                            </div>
                            <div className="project-card card-font ">h!pst@r v.1</div>
                            <div className="project-card-content">
                                <b>h!pst@r</b> is a movie rating and recommendation site which connects users based on mutual distaste. Using The Movie Database (TMD) external API, users are able to search for movies, add them to their Love or Hate list, and leave a review.
                                <p><a className="linkcolor" href="https://github.com/mister-michael/hipStar">Github Link</a></p>

                            </div>
                        </div>
                    </section>
                </div>


                <section className="sectionHeader">
                    <div className="headlineText2 marginTop borderBottom"><a className="indentLarge"></a></div>
                    <div className="subText bold marginBottom borderBottom">{indentLarge()} Group Projects</div>
                </section>

                <div id="hrapp">
                    <section onClick={toggle} id="" className="project-section marginTop ">
                        <div className="skillsSection boxShadow ">
                            <div className="project-card-header">
                                <img className="hipstar" src={require("../img/django-icon.png")} />
                                <div className="project-card card-font ">Bangazon HR</div>
                            </div>
                            <div className="project-card-content">
                                <p>
                                    <b>Bangazon Workforce Management</b> is a back-end human resources management application built in Django, utilizing Templates to deliver DOM elements to the client.  SQLite and Tableplus are utilized for database XXXXXXwhat's the wordXXXXX and testing.
                                </p>
                                <p>
                                    Styling is done in straight CSS.
                                </p>
                            </div>
                            <a href="https://github.com/nss-day-cohort-38/bangazon-workforce-management-alpha-orionis" className="linkcolor" id="hrapplink">Github Link</a>
                        </div>
                    </section>
                </div>

                <div id="hrapp">
                    <section onClick={toggle} id="" className="project-section marginTop ">
                        <div className="skillsSection boxShadow ">
                            <div className="project-card-header">
                                <img className="hipstar" src={require("../img/django-icon.png")} />
                                <div className="project-card card-font ">Bangazon E-Commerce</div>
                            </div>
                            <div className="project-card-content">
                                <p>
                                    <b>Bangazon Workforce Management</b> is a back-end human resources management application built in Django, utilizing Templates to deliver DOM elements to the client.  SQLite and Tableplus are utilized for database XXXXXXwhat's the wordXXXXX and testing.
                                </p>
                                <p>
                                    Styling is done in straight CSS.
                                </p>
                            </div>
                            <a href="https://github.com/nss-day-cohort-38/bangazon-workforce-management-alpha-orionis" id="hrapplink">Github Link</a>
                        </div>
                    </section>
                </div>





                <Skills />
            </div>
        </>


    )
}

export default ThePast