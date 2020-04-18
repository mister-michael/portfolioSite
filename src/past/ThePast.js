import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText } from 'reactstrap';
import Skills from "../present/Skills"

const ThePast = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const indentLarge = () => <a className="indentLarge"></a>

    return (
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
                <div className="subText bold marginBottom borderBottom">{indentLarge()} front end</div>
            </section>

            <div>
                <section onClick={toggle} id="" className="project-section marginTop ">
                    <div className="skillsSection boxShadow ">
                        <div className="project-card card-font ">h!pst@r</div>
                        <div >
                            <img className="hipstar" src={require("../img/python-icon.png")} />
                        </div>
                    </div>
                </section>

                <Modal isOpen={modal} toggle={toggle} className="">
                    <ModalHeader toggle={toggle} close={closeBtn}>h!pst@r</ModalHeader>
                    <ModalBody>
                        <section className="testContainer">
                            <img className="hipstar testChild" src={require("../img/hipstar-page.png")} />

                            <p className="testCopy">
                                h!pst@r is a movie rating and recommendation site which connects users based on mutual distaste. Using The Movie Database (TMD) external API, users are able to search for movies, add them to their Love or Hate list, and leave a review. Users are matched with users whose Hate list most resembles their own, and they are recommended movies from that user's Love list.  The  app employs full CRUD functionality, using TMD to populate a JSON-server from where data can be adjusted. Built in React.js, the site utilizes Reactstrap as a basis for styling, upone which basic CSS has been applied.

                                h!pst@r is a movie rating and recommendation site which connects users based on mutual distaste. Using The Movie Database (TMD) external API, users are able to search for movies, add them to their Love or Hate list, and leave a review. Users are matched with users whose Hate list most resembles their own, and they are recommended movies from that user's Love list.  The  app employs full CRUD functionality, using TMD to populate a JSON-server from where data can be adjusted. Built in React.js, the site utilizes Reactstrap as a basis for styling, upone which basic CSS has been applied.
                </p>
                        </section>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>



            <section id="" className="project-section marginTop ">
                <div className="skillsSection boxShadow">
                    <div className="project-card card-font ">back_end</div>
                    <div >
                        <img className="hipstar" src={require("../img/python-icon.png")} />
                    </div>
                </div>
            </section>
            {/* </div> */}




            <Skills />


        </div>
    )
}

export default ThePast