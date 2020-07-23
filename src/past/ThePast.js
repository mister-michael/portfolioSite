import React, { useState } from 'react';
import "./thePast.css"

const ThePast = (props) => {

    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("./pastMedia/yarnHair.jpg")

    const toggle = (e) => {
        setImage(e.target.id)
        setModal(!modal)
        const isHidden = document.getElementById("modalImage")
        if (isHidden !== null) {
            document.getElementById("modalImage").classList.toggle("hidden")
        }
    }

    return (
        <>
            <div className="detailsCard pageBody">
                <div className="subText">
                    <div className="biggerFont">We </div>are now in the...</div>
                <div className="marginBottom20">
                    <h1 className="headlineText  marginBottom3">Past</h1>

                    <div className="bodyText marginBottom4 borderBottom">
                        <p>
                            " A E S T H E T I C S " defined my past.  After film school, I decided to pursue a
                            lost love of music. While learning production software, I ingratiated myself to the
                            Chicago music scene as a photographer. Although every photo is a self-portrait, (ask
                            any photographer), I sensed my audience was unaware of my presence in each photo. In an
                            attempt to make that presence more overt, at one concert, I created a large paper collage
                            backdrop and took pictures of guests in front of it. And so, I became a collage artist.
                    </p>
                        <p>
                            Collage led to street art, and street art led to mixed media, and mixed media led back to video. So the story goes,
                            it all came full circle. My curiosity and desire to learn kept me learning, and took me around the world,
                            and on my journey I had done all that I dreamed, all but build a home.
                    </p>
                        <p>
                            In code, I've found a home. A single medium where the horizon of discovery is unreachable. Unfortunately,
                            or fortunately, the wealth of my creation remains quarantined in a storage locker in Los Angeles. These works are my earliest,
                            and the only I have on-hand. It does seem appropriate that as I start my new journey, I show you how
                            I started my last.
                    </p>
                    </div>


                </div>


                {image !== null ?
                    <img className="modalImage" src={require(`${image}`)} alt="" />
                    : null}


                <div className="gallery">

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/Comic01.jpg" className="galleryImage" src={require("./pastMedia/Comic01.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/Danke.jpg" className="galleryImage" src={require("./pastMedia/Danke.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/girlFace.jpg" className="galleryImage" src={require("./pastMedia/girlFace.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/supergirl.jpg" className="galleryImage" src={require("./pastMedia/supergirl.jpg")} alt="" />
                    </div>



                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/BigScreen.jpg" className="galleryImage" src={require("./pastMedia/BigScreen.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/Cole.jpg" className="galleryImage" src={require("./pastMedia/Cole.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/punk.jpg" className="galleryImage" src={require("./pastMedia/punk.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/tim.jpg" className="galleryImage" src={require("./pastMedia/tim.jpg")} alt="" />
                    </div>



                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/tree.jpg" className="galleryImage" src={require("./pastMedia/tree.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/egoDeath.jpg" className="galleryImage" src={require("./pastMedia/egoDeath.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/leaves.jpg" className="galleryImage" src={require("./pastMedia/leaves.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/moth.jpg" className="galleryImage" src={require("./pastMedia/moth.jpg")} alt="" />
                    </div>



                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/pinwheelFace.jpg" className="galleryImage" src={require("./pastMedia/pinwheelFace.jpg")} alt="" />
                    </div>


                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/yarnEyes.jpg" className="galleryImage" src={require("./pastMedia/yarnEyes.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/yarnHair.jpg" className="galleryImage" src={require("./pastMedia/yarnHair.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/stephen.jpg" className="galleryImage" src={require("./pastMedia/stephenDisplay.jpg")} alt="" />
                    </div>
                </div>

                <div className="timeTravelButtonContainer marginTop2">
                    <div
                        onClick={()=>{props.goToFuture()}}
                        className="timeTravelButton">Travel to the Future</div>
                </div>

            </div>
        </>


    )
}

export default ThePast