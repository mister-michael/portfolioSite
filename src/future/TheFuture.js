import React from 'react';
import "./TheFuture.css"

const TheFuture = (props) => {

    const goToResume = () => {
        props.setActiveTab("4")
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className="detailsCard pageBody">
                <div className="subText">
                    <div className="biggerFont">We </div>are heading into the</div>
                <div className="">
                    <h1 className="headlineText  marginBottom">Future.</h1>

                    <div className="marginTop marginBottom2 borderBottom">
                        <div className="bodyText marginBottom ">
                            <p>
                                My mother was fond of telling me, "Yesterday is history, Tomorrow's a mystery, Today is a gift, that's why we call it the present,"
                                the wisdom of which reached me later in life than I may have liked. But isn't that the nature
                                of wisdom?  As I look forward toward my career, I find myself open to a myriad of possibilities.
                                My past experience with visual arts leads my eye to front-end work, perhaps in consulting, as I'm very
                                interested in UI/UX. The project doesn't seem to become real until it meets its user.  However,
                                i find myself increasingly appreciative of the server-side. The nature of the DOM is pretty hollow without
                                meaningful data to represent. I want to learn every part of this machine, and whatever I learn next
                                will only be the start of an incredible journey. If I could hope for one thing, it is to be part
                                of a great team of which I can be a great member.
                            </p>
                            <p>
                                Below is my resume. At the top of the page are links to my
                                <a href="https://www.linkedin.com/in/michaelclarknashville/"> LinkedIn</a> and <a href="https://github.com/mister-michael">Github</a> pages.
                            </p>
                            <p>
                                I have installed Jitsi video conferencing software so we can chat. Send me a text or email,
                                and let's set up a time to chat. You'll find a link to my video conferencing site at the top of
                                the page by clicking on <a href="chat.michaelclarknashville.com">chat</a>.
                            </p>
                            <p>You can find my resume here:</p>
                            <div
                                onClick={goToResume}
                                className="timeTravelButton marginTop2">Resume</div>
                        </div>
                    </div>
                </div>



                {/* <div className="resume">
                    <h2>Resume</h2>
                    <div className="resumeContainer marginTop borderBottom">
                        <img id="./resume-blue-1.jpg" className="resumeImage" src={require("./Michael_Clark_Developer-Resume-1.jpg")} alt="" />
                        <img id="./resume-blue-2.jpg" className="resumeImage" src={require("./Michael_Clark_Developer-Resume-2.jpg")} alt="" />
                    </div>
                    <h2 className="marginTop">Cover Letter</h2>
                    <img id="./resume-blue-2.jpg" className="resumeImage marginTop" src={require("./Michael_Clark_Developer-CV.jpg")} alt="" />
                </div> */}
            </div>
        </>
    )
}

export default TheFuture