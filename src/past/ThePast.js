import React from "react";
import { CardText } from "reactstrap"
import Skills from "../present/Skills"

const ThePast = () => {

    return (
        <div className="detailsCard pageBody">
            <div className="">
                <a className="indent"></a>
                <div className="subText">
                    <a className="biggerFont"><a className="indent"></a>We </a>are currently in the...</div>
                <div className="marginBottom60">
                    <h1 className="headlineText"><a className="indentLarge"></a>Past</h1>
                </div>
            </div>
            <CardText className="marginTop">
                <div className="subText bold">Nashville Software School</div>
                <div className="subTitle marginBottom20">Jan 2019 to Present</div>
                {/* <a className="indent"></a> */}
                <ul className="resumeDetails">
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
            <Skills />


        </div>
    )
}

export default ThePast