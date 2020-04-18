import React from "react"
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Skills from "./Skills"

const ThePresent = (props) => {

    return (
        <div className="detailsCard pageBody">
            <div className="">
                <a className="indent"></a>
                <div className="subText">
                    <a className="biggerFont"><a className="indent"></a>We </a>are currently in the...</div>
                <div className="marginBottom60">
                    <h1 className="headlineText"><a className="indentLarge"></a>Present</h1>
                </div>
            </div>
            <CardText className="marginTop">
                <div className="subText bold">Nashville Software School</div>
                <div className="subTitle marginBottom20">Jan 2019 to Present</div>
                {/* <a className="indent"></a> */}
                <div>Full-time Full-Stack Team-Intensive Bootcamp. </div>
                <div>Front End Development using HTML, CSS, Javascript and React.</div>
                <div>Back  End Development with Python and Django.</div>
                <div>Utilized third party APIs (JSON Server, The Movie Database) for web apps.</div>
                <div>Responsible for CRUD functionality in individual and group projects.</div>
                <div>Leveraged Slack and Zoom for remote study and group projects.</div>
                <div>Secure code version control using Git / Github.</div>
                <div>Project Management with Github Projects and Trelo.</div>
            </CardText>
            <Skills />


        </div>
    )
}

export default ThePresent