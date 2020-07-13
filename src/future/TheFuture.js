import React from 'react';
import "./TheFuture.css"

const TheFuture = () => {
    return (
        <>
            <div className="detailsCard pageBody">
                <div className="subText">
                    <div className="biggerFont">We </div>are currently in the...</div>
                <div className="">
                    <h1 className="headlineText borderBottom ">"Future"</h1>
                </div>

                <div className="marginTop ">
                    <div className="bodyText marginBottom ">
                        <p> My mother was fond of retelling me, "Tomorrow is a gift, that's why we call it the present,"
                        the wisdom of which reached me later in life than I may have liked. But isn't that the nature
                        of wisdom?  As I look forward towards my career, I find myself open to a myriad of possibilities.
                        My past experience with visual arts leads my eye towards front-end, perhaps in consulting, as I'm very
                        interested in UI/UX. The project doesn't seem to become real until it meets its user.  However,
                        i find myself increasingly appreciative of the server-side. The nature of the DOM is pretty hollow without
                        meaningful data to represent. I want to learn every part of this machine, and whatever I learn next
                        will only be the start of an incredible journey. If I could hope for one thing, it is to be part
                        of a great team of which I can be a great member.
                        </p>
                        <p>
                            Below is my resume. At the top of the page are links to my LinkedIn and Github pages.
                        </p>
                        <p>
                            I have installed Jitsi video conferencing software so we can chat. Send me a text or email,
                            and let's set up a time to chat. You'll find a link to my video conferencing site at the top of 
                            the page by clicking on <a href="chat.michaelclarknashville.com">chat</a>.
                        </p>
                    </div>
                </div>

                <div className="resume">
                    <div className="resumeContainer">
                        <img id="./pastMedia/Comic01.jpg" className="resumeImage" src={require("./Resume-Page-1.jpg")} alt="" />
                        <img id="./pastMedia/Comic01.jpg" className="resumeImage" src={require("./resume-page-2.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheFuture