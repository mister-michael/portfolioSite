import React from "react";
import {CardText} from "reactstrap";
import Skills from "../present/Skills"

const Home = (props) => {

    return (
        <div className="detailsCard pageBody">
            <h1 className="headlineText marginBottom">Michael Clark</h1>
            <CardText className="detailBody">
                <div className="titleAndParagraph subText marginBottom">
                    A 
                    <a className="biggerFont">  Portfolio </a>
                    in Three Acts.
                </div>
            </CardText>
            <section className="pPF">
                <div
                    onClick={() => { props.toggle('1'); }} className="pPFBox">Present.</div>
                <div
                    onClick={() => { props.toggle('2'); }} className="pPFBox">Past.</div>
                <div
                    onClick={() => { props.toggle('3'); }} className="pPFBox">Future.</div>
            </section>
            {/* <Skills /> */}
        </div>
    )
}

export default Home