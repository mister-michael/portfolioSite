import React from "react";

const CoverLetter = (props) => {

    return (
        <>

            <section className="pageBody siteBody">

                <div className="resume">
                    {/* <h2 className="marginTop">Cover Letter</h2> */}
                    <img id="../future/resume-blue-2.jpg" className="resumeImage marginTop marginBottom20" src={require("../future/Michael_Clark_Developer-CV.jpg")} alt="" />
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

export default CoverLetter