import React from "react";

const Skills = () => {

    return (
        <>
            <section className="skillsSection">
                <div className="skillsCard">
                    <div className="skillsDiv">
                        <h1 className="subText biggerFont">
                            {/* <a className="indentLarge"></a> */}
                            Present Talent Stack</h1>
                    </div>
                    <div className="">
                        <img
                            src={require("../img/HTML5-icon.png")}
                            className="iconBox"
                        />
                        <img
                            src={require("../img/css3-icon.png")}
                            className="iconBox"
                        />

                        <img
                            src={require("../img/javascript-icon.png")}
                            className="iconBox"
                        />
                        <img
                            src={require("../img/react-icon.png")}
                            className="iconBox"
                        />
                        <img
                            src={require("../img/python-icon.png")}
                            className="iconBox"
                        />
                        <img
                            src={require("../img/django-icon.png")}
                            className="iconBox"
                        />
                        <img
                            src={require("../img/github-icon.png")}
                            className="iconBox"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Skills