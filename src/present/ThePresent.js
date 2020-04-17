import React from "react"
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const ThePresent = () => {

    return (
        <div className="detailsCard">
            <h1 className="headlineText marginBottom">Michael Clark</h1>
            <CardText className="detailBody">
                <div className="titleAndParagraph subText marginBottom">
                    A
                    <a className="biggerFont">
                        Portfolio </a>
                    in three Acts.
                </div>
            </CardText>
            <section className="pPF">
                <div className="pPFBox">Present.</div>
                <div className="pPFBox">Past.</div>
                <div className="pPFBox">Future.</div>
            </section>
            <div className="">
                <a className="indent"></a>
                <div className="subText">

                    <a className="biggerFont"><a className="indent"></a>We </a>are currently in the</div>
                <div className="">


                    <h1 className="headlineText"><a className="indentLarge"></a>Present</h1>
                </div>
            </div>
            <CardText className="marginTop"><a className="indent"></a>I have spent my life in the pursuit of creation. Musical, photographic and experiential. In code, I've found the ultimate creative tool and in the web, the ultimate canvas.  Levels of abstraction and metaphor akin to art and story, and levels of logic of which past mediums were woefully devoid. Code has provided me with a task, a community and a frame of mind which continue to enrich and inspire me.</CardText>
            <CardText>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </CardText>
        </div>
    )
}

export default ThePresent