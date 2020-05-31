import React from "react"
import { Card, CardBody, Button, CardTitle, CardText as div, CardImg } from 'reactstrap';
import Skills from "./Skills"
import "../Portfolio.css"

const ThePresent = (props) => {


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
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </div>



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
            </section>
        </div>
    )
}

export default ThePresent