import React, { useState } from "react"
import { Card, CardBody, Button, CardText, CardText as div, CardImg } from 'reactstrap';
import Skills from "./Skills"
import "../Portfolio.css"

const ThePresent = (props) => {

    const indentLarge = () => <a className="indentLarge"></a>

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="detailsCard pageBody">
            <div className="">
                <a className="indent"></a>
                <div className="subText">
                    <a className="biggerFont"><a className="indent"></a>We </a>are currently in the...
                    </div>
                <div className="">
                    <h1 className="headlineText"><a className="indentLarge"></a>Present</h1>
                </div>
            </div>
            <div className="marginTop ">
                <a className="indent"></a>
                <div className="bodyText marginBottom2 borderBottom"> I have spent my life in the pursuit of creation. Musical, photographic and experiential. In code, I've found the ultimate creative tool and in apps, the ultimate canvas.  Levels of abstraction and metaphor akin to art and story, and levels of logic of which past mediums were woefully devoid. Code has provided me with a task, a community and a frame of mind which continue to enrich and inspire me.</div>
            </div>




            <div>
                <div className="detailsCard pageBody">
                    {/* <div className="">
                    <a className="indent"></a>
                    <div className="subText">
                        <a className="biggerFont"><a className="indent"></a>We </a>are currently in the...</div>
                    <div className="marginBottom60">
                        <h1 className="headlineText borderBottom marginBottom3"><a className="indentLarge"></a>"Past"</h1>
                    </div>
                </div> */}
                    <CardText className="marginTop">
                        <section className="flex-row-wrap">
                            <img className="logo" src={require("../img/NSS-icon.jpeg")} />
                            <div>
                                <div className="subText bold">Nashville Software School</div>
                                <div className="subTitle marginBottom20">Jan 2020 to Jun 2020</div>
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

                    <div className="">
                        <a className="indent"></a>
                        <div className="subText">
                            <a className="biggerFont"><a className="indent"></a>Unexpected </a>lessons...
                    </div>
                        {/* <div className="">
                            <h1 className="headlineText"><a className="indentLarge"></a>Present</h1>
                        </div> */}
                    </div>
                    <div className="marginTop ">
                        <a className="indent"></a>
                        <div className="bodyText marginBottom2">
                            <ul>
                                <li>Team Communication</li>
                                <li>The Joy of DeBugging</li>
                                <li>Succeeding while Remote</li>
                                <li>Planning a Sprint</li>
                                <li>Zen Mindset</li>
                            </ul>
                        </div>
                    </div>


                    <section className="sectionHeader">
                        <div className="headlineText2 marginTop borderBottom"><a className="indentLarge"></a>Apps</div>
                        <div className="subText bold marginBottom borderBottom">{indentLarge()} Individual Projects</div>
                    </section>

                    <div id="projectM">
                        <section onClick={toggle} id="" className="project-section marginTop ">

                            <div className="skillsSection boxShadow ">

                                <div className="project-card card-font">projectM</div>
                                <div className="cardPadding">

                                    <div><b>projectM</b> is a Project Management application for Photo Studios. Using Django ORM and Rest Framework, with a React Front-end,
                                        projectM allows studio managers and employees to coordinate photoshoots and equipment. With full CRUD functionality
                                        users can see and schedule upcominng photoshoots, add clients and equipment to photoshoots, and add equipment and clients to the
                                        database.  Studio Managers (superusers), can edit employee details and de/activate staff.
                                    </div>
                                    <div><a className="linkcolor" href="https://github.com/mister-michael/backend-capstone-web-app-react">Overview on Github</a></div>
                                </div>
                                <div className="card-image-padding">
                                    <img className="project-card-image" src={require("../img/django-icon.png")} />
                                    <img className="project-card-image" src={require("../img/react-icon.png")} />
                                    <img className="project-card-image" src={require("../img/HTML5-icon.png")} />
                                    <img className="project-card-image" src={require("../img/css3-icon.png")} />
                                    <img className="project-card-image" src={require("../img/github-icon.png")} />
                                    <img className="project-card-image" src={require("../img/python-icon.png")} />
                                    <img className="project-card-image" src={require("../img/javascript-icon.png")} />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div id="hipstar-vi">
                        <section onClick={toggle} id="" className="project-section marginTop ">
                            <div className="skillsSection boxShadow ">
                                <div className="project-card card-font ">h!pst@r</div>
                                <div className="cardPadding">
                                    <div><b>h!pst@r</b> is a movie rating and recommendation site which connects users based on mutual distaste.
                                    Using The Movie Database (TMD) external API, users are able to search for movies, add them to their
                                    Love or Hate list, and leave a review.
                                    </div>
                                    <div><a className="linkcolor" href="https://github.com/mister-michael/hipStar">Overview on Github</a></div>
                                </div>
                                <div className="card-image-padding">
                                    <img className="project-card-image" src={require("../img/django-icon.png")} />
                                    <img className="project-card-image" src={require("../img/react-icon.png")} />
                                    <img className="project-card-image" src={require("../img/HTML5-icon.png")} />
                                    <img className="project-card-image" src={require("../img/css3-icon.png")} />
                                    <img className="project-card-image" src={require("../img/github-icon.png")} />
                                    <img className="project-card-image" src={require("../img/python-icon.png")} />
                                    <img className="project-card-image" src={require("../img/javascript-icon.png")} />
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
                                    <div className="project-card card-font ">Bangazon E-Commerce</div>
                                </div>
                                <div className="cardPadding">
                                    <p><b>Bangazon E-Commerce App</b> is an Amazon styled e-commerce app built in Django ORM with Rest Framework. Front-End built in React.
                                        Users can buy and sell products on the site. They can search for products by category, name or location and checkout via a shopping cart.
                                        This was the project where my understanding of Django
                                        really came together. Having gained that understanding, I put in a concerted effort into helping my teamates,
                                        and through teaching and assisting I cemented that understanding.


                                    </p>
                                    <p>Styling is done in straight CSS.</p>
                                    <div>
                                        <a href="https://github.com/nss-day-cohort-38/bangazon-workforce-management-alpha-orionis" id="hrapplink">Github Link</a>
                                    </div>
                                </div>
                                <div className="card-image-padding">
                                    <img className="project-card-image" src={require("../img/django-icon.png")} />
                                    <img className="project-card-image" src={require("../img/python-icon.png")} />
                                    <img className="project-card-image" src={require("../img/react-icon.png")} />
                                    <img className="project-card-image" src={require("../img/javascript-icon.png")} />
                                    <img className="project-card-image" src={require("../img/HTML5-icon.png")} />
                                    <img className="project-card-image" src={require("../img/css3-icon.png")} />
                                    <img className="project-card-image" src={require("../img/github-icon.png")} />
                                    <img className="project-card-image" src={require("../img/postman-icon.png")} />
                                    <img className="project-card-image" src={require("../img/tableplus-icon.jpeg")} />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div id="hrapp">
                        <section onClick={toggle} id="" className="project-section marginTop ">
                            <div className="skillsSection boxShadow ">
                                <div className="project-card-header">
                                    <div className="project-card card-font ">Bangazon HR App</div>
                                </div>
                                <div className="cardPadding">
                                    <p>
                                        <b>Bangazon Workforce Management</b> is a back-end human resources management application
                                        built in Django, utilizing Templates to deliver DOM elements to the client.
                                        SQLite and Tableplus are utilized for database management, straight CSS for styling and Postman utilized for testing.
                                    </p>
                                    {/* <p>Styling is done in straight CSS. </p> */}
                                    <div>
                                        <a href="https://github.com/nss-day-cohort-38/bangazon-workforce-management-alpha-orionis" className="linkcolor" id="hrapplink">Github Link</a>
                                    </div>
                                </div>
                                <div className="card-image-padding">
                                    <img className="project-card-image" src={require("../img/django-icon.png")} />
                                    <img className="project-card-image" src={require("../img/python-icon.png")} />
                                    <img className="project-card-image" src={require("../img/github-icon.png")} />
                                    <img className="project-card-image" src={require("../img/postman-icon.png")} />
                                    <img className="project-card-image" src={require("../img/tableplus-icon.jpeg")} />
                                </div>
                            </div>
                        </section>
                    </div>







                    <Skills />
                </div>
            </div>


            {/* 
            <section id="apps-and-acts-container">
                <div id="acts">
                    <div className="subText marginTop">
                        This is a<a className="biggerFont"><a className="indent"></a>Portfoliio </a>in
                        <div>three...</div>
                    </div>
                    <h1 className="headlineText"><a className="indentLarge"></a>Acts</h1>
                    <Button
                        className="buttonSize subText marginBottom"
                        onClick={() => { props.toggle('2'); }}
                    >
                        ( ACT I )<a className=""><a className="indent"></a>PRESENT </a>
                    </Button>
                    <Button
                        onClick={() => { props.toggle('1'); }}
                        className="buttonSize subText marginBottom">
                        ( ACT II )<a className=""><a className="indent"></a>PAST </a>
                    </Button>
                    <Button
                        onClick={() => { props.toggle('3'); }}
                        className="buttonSize subText marginBottom">
                        ( ACT III )<a className=""><a className="indent"></a>FUTURE </a>
                    </Button>
                </div>



                <div id="apps">
                    <div className="subText marginTop">
                        This is also a<a className="biggerFont"><a className="indent"></a>Portfolio </a>in
                        <div>three...</div>
                    </div>
                    <h1 className="headlineText"><a className="indentLarge"></a>Apps</h1>
                    <Button className="buttonSize subText marginBottom">
                        ( h!pStar )<a className=""><a className="indent"></a>React.js </a>
                    </Button>
                    <Button className="buttonSize subText marginBottom">
                        (Front End)<a className=""><a className="indent"></a>React.js </a>
                    </Button>
                    <Button className="buttonSize subText marginBottom">
                        (Back End)<a className=""><a className="indent"></a>Django.py </a>
                    </Button>
                </div>
            </section> */}
        </div>
    )
}

export default ThePresent