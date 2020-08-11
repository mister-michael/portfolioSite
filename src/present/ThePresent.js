import React, { useState } from "react";
import Skills from "./Skills";
import "../Portfolio.css";

const ThePresent = (props) => {

    const indentLarge = () => "";

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    };

    const scrollToEducation = () => {
        const educationElement = document.getElementById("education");
        window.scrollTo(0, getOffset(educationElement).top);
    };

    const scrollToProjects = () => {
        const projectsElement = document.getElementById("projects1");
        window.scrollTo(0, getOffset(projectsElement).top);
    };



    return (
        <div id="PresentPage" className="detailsCard pageBody mobileCard">

            <div className="marginBottom borderBottom" id="initial-instructions">
                You can go directly to my
                <div className="in-site-link" onClick={() => { props.goToResume() }}> resume, </div> or scroll down to
                learn about my <div className="in-site-link" onClick={scrollToEducation}>coding education</div>,  my
                <div onClick={scrollToProjects} className="in-site-link"> coding-projects, </div>
                my history in the <div className="in-site-link" onClick={() => { props.goToPast() }}>arts</div> (the Past)
                and my <div className="in-site-link" onClick={() => { props.goToFuture() }}> aspirations</div> (the Future).
                At the bottom of each page, you'll find a time-travel button to take you to the next
                page in the timeline.
                Here, and in the menu at the top of the page, are links to my
                <a className="in-site-link" href="https://www.linkedin.com/in/michaelclarknashville/"> LinkedIn</a> and
                <a className="in-site-link" href="https://github.com/mister-michael"> Github</a> pages, as well as my
                <a className="in-site-link" href="chat.michaelclarknashville.com"> Jitsi Video Conferencing </a>server and contact information.
            <div className="marginTop marginBottom">Start scrolling for the full experience</div>
            </div>

            <section className="centerIt">
                <div className="">
                    <div className="subText">
                        <div className="biggerFont">We </div>are currently in the...
                    </div>
                    <div className="">
                        <h1 className="headlineText">Present</h1>
                    </div>
                </div>
                <div className="marginTop">
                    <div className="bodyText marginBottom">
                        I have spent my life in the pursuit of creation. Musical, photographic and
                        experiential. In code, I have found the ultimate creative tool, and in apps,
                        the ultimate canvas.  I have found levels of abstraction and metaphor akin to art and story,
                        and levels of logic of which past mediums were woefully devoid. Code has provided
                        me with a task, a community and a frame of mind which continue to enrich and
                        inspire me. This discovery was made at Nashville Software School, a 6-month, full-time,
                        full-stack coding bootcamp where I participated in Group and Individual projects
                        using React.js and Django, including three months of Remote Working Experience.
                    </div>
                </div>

                <div >
                    <div id="PresentBody" className="mobileCard detailsCard pageBody">

                        <div id="education" className=" ">
                            <section className="flex-row-wrap">
                                <img className="logo" src={require("../img/NSS-icon.jpeg")} alt="" />
                                <div>
                                    <div className="subText bold">Nashville Software School</div>
                                    <div className="subTitle marginBottom20">Jan 2020 to Jun 2020</div>
                                </div>
                            </section>
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
                        </div>

                        <div className="">
                            <div className="subText">
                                <div className="biggerFont">Unexpected </div>lessons...
                            </div>
                        </div>
                        <div id="lessons" className="marginTop2 marginBottom3">
                            <div className="bodyText mobileCard">
                                <ul>
                                    <li>Team Communication</li>
                                    <li>The Joy of DeBugging</li>
                                    <li>Succeeding while Remote</li>
                                    <li>Planning a Sprint</li>
                                    <li>Working through my Tickets (Stories)</li>
                                    <li>Zen Mindset</li>
                                </ul>
                            </div>
                        </div>


                        <section className="sectionHeader">
                            <div id="projects1" className="headlineText2 marginTop borderBottom">Apps</div>
                            <div className="subText bold marginBottom borderBottom">{indentLarge()} Individual Projects</div>
                        </section>

                        <div className="marginBottom40" id="hipstar-vi">
                            <section onClick={toggle} id="" className="project-section marginTop ">
                                <div className="skillsSection boxShadow ">
                                    <div className="project-card card-font ">h!pst@r</div>
                                    <img className="appImage" src={require("../img/project_images/hipstar-image.png")} alt="hipstar screenshot" />
                                    <div className="cardPadding">
                                        <div><b>h!pst@r</b> is a movie rating and recommendation site, built in React.js, which connects users based on mutual distaste.
                                    Using The Movie Database (TMD) external API, users are able to search for movies, add them to their
                                    Love or Hate lists and leave a review. This is a really fun app and I had a blast making it. My first
                                    solo project.  Overview, screenshots and download instructions are available in the <a className="linkcolor" href="https://github.com/mister-michael/hipStar">Github Repo</a>.
                                        </div>
                                    </div>
                                    <div className="card-image-padding">
                                        <img className="project-card-image" src={require("../img/react-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/HTML5-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/css3-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/github-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/python-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/javascript-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/postman-icon.png")} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div id="PresentBody">
                            <section onClick={toggle} id="" className="project-section marginTop">

                                <div className="skillsSection boxShadow">

                                    <div className="project-card card-font">projectM</div>
                                    <div className="appImage">

                                        <img className="appImage" src={require("../img/project_images/equipment-image-700.png")} alt="projectM screenshot" />
                                    </div>
                                    <div className="cardPadding ">

                                        <div className=""><b>projectM</b> is a Project Management application for Photo Studios. Using Django ORM and Rest Framework, with a React Front-end,
                                        projectM allows studio managers and employees to coordinate photoshoots and equipment. With full CRUD functionality
                                        users can see and schedule upcoming photoshoots, add clients and equipment to photoshoots, and add equipment and clients to the
                                        database.  Studio Managers (superusers), can edit employee details and de/activate staff.  Overview, screenshots and download instructions are
                                        available in the <a className="linkcolor" href="https://github.com/mister-michael/backend-capstone-web-app-react">Github Repo</a>.

                                    </div>
                                        <div></div>
                                    </div>
                                    <div className="card-image-padding">
                                        <img className="project-card-image" src={require("../img/django-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/react-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/HTML5-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/css3-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/github-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/python-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/javascript-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/postman-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/tableplus-icon.jpeg")} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>



                        <div className="marginBottom60" id="hipstar-vi">
                            <section onClick={toggle} id="" className="project-section marginTop ">
                                <div className="skillsSection boxShadow ">
                                    <div className="project-card card-font ">This Website</div>
                                    <div className="cardPadding">
                                        {/* <img className="appImage" src={require("../header/threeMikes-big.jpg")} alt="" /> */}
                                        <div><b>This website</b>  is built in React.js and deployed using Netlify. The Jitsi Video Conferencing
                                    utility is hosted by AWS. I could describe the rest of the site, but I'd much rather you see for yourself.
                                    </div>
                                        <div><a className="linkcolor" href="https://github.com/mister-michael/portfolioSite">Github Repo</a></div>
                                    </div>
                                    <div className="card-image-padding">
                                        <img className="project-card-image" src={require("../img/react-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/javascript-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/HTML5-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/css3-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/github-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/aws-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/netlify-logo.jpeg")} alt="" />
                                        <img className="project-card-image" src={require("../img/jitsi-icon.jpeg")} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <section className="sectionHeader">
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
                                        really came together. Having gained that understanding, I put in a concerted effort into helping my teammates,
                                        and through teaching and assisting I cemented that understanding.

                                    </p>
                                        <p>Styling is done in straight CSS.</p>
                                        <div>
                                            <a href="https://github.com/nss-day-cohort-38/bangazon-ecommerce-web-app-neo-colony" id="hrapplink">Github Repo</a>
                                        </div>
                                    </div>
                                    <div className="card-image-padding">
                                        <img className="project-card-image" src={require("../img/django-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/python-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/react-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/javascript-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/HTML5-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/css3-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/github-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/postman-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/tableplus-icon.jpeg")} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="marginBottom20" id="hrapp">
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
                                        <div>
                                            <a href="https://github.com/nss-day-cohort-38/bangazon-workforce-management-alpha-orionis" className="linkcolor" id="hrapplink">Github Repo</a>
                                        </div>
                                    </div>
                                    <div className="card-image-padding">
                                        <img className="project-card-image" src={require("../img/django-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/python-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/github-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/postman-icon.png")} alt="" />
                                        <img className="project-card-image" src={require("../img/tableplus-icon.jpeg")} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <Skills className="marginBottom20" />
                        <div className="timeTravelButtonContainer">
                            <div
                                onClick={() => { props.goToPast() }}
                                className="timeTravelButton marginTop">Travel to the Past</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThePresent