import React from "react";

const Home = (props) => {

    return (
        <div className="detailsCard pageBody">
            <h1 className="headlineText marginBottom">Michael Clark</h1>
            <section className="pPF">
                <div
                    onClick={() => { props.toggle('2'); }} className="pPFBox">Present.</div>
                <div
                    onClick={() => { props.toggle('1'); }} className="pPFBox">Past.</div>
                <div
                    onClick={() => { props.toggle('3'); }} className="pPFBox">Future.</div>
            </section>
            {/* <Skills /> */}
        </div>
    )
}

export default Home