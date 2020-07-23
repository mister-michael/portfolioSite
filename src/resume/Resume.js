import React from "react";

const Resume = (props) => {

    return (
        <>
            <section className="pageBody siteBody">
                <div className="resumeContainer max-width1000">
                    <img id="../future/resume-blue-2.jpg" className="resumeImage marginTop " src={require("../future/Michael_Clark_Developer-CV.jpg")} alt="" />

                    <div className=" marginTop">
                        <img id="../future/resume-blue-1.jpg" className="resumeImage" src={require("../future/Michael_Clark_Developer-Resume-1.jpg")} alt="" />
                        <img id="../future/resume-blue-2.jpg" className="resumeImage" src={require("../future/Michael_Clark_Developer-Resume-2.jpg")} alt="" />
                    </div>
                </div>

                <div
                    onClick={() => props.goToPresent()} className="timeTravelButton marginTop2">Present</div>
                <div
                    onClick={() => props.goToPast()} className="timeTravelButton  marginTop">Past</div>
                <div
                    onClick={() => props.goToFuture()} className="timeTravelButton marginTop">Future</div>
            </section>
        </>
    )
}

export default Resume