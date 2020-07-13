import React, { useState, useEffect } from 'react';
import "./thePast.css"

const ThePast = (props) => {

    const [modal, setModal] = useState(false);
    const [image, setImage] = useState(null)

    const toggle = (e) => {
        setImage(e.target.id)
        setModal(!modal)
        const isHidden = document.getElementById("modalImage").classList
        console.log(isHidden)
        if (isHidden.value === "hidden") {
            document.getElementById("modalImage").classList.toggle("hidden")
        }
    }

    // useEffect(() => {

    // }, [image])

    return (
        <>
            <div className="detailsCard pageBody">
                <div className="subText">
                    <div className="biggerFont">We </div>are currently in the...</div>
                <div className="marginBottom60">
                    <h1 className="headlineText borderBottom marginBottom3">"Past"</h1>
                </div>


                <div id="modalImage">
                    {image !== null ?
                        <div className="centerImage">
                            <img className="modalImage" src={require(`${image}`)} alt="" />
                            {/* <button onClick={toggle2}>Close</button> */}
                        </div>
                        : null}
                </div>

                <div className="gallery">

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/BigScreen.jpg" className="galleryImage" src={require("./pastMedia/BigScreen.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/Cole.jpg" className="galleryImage" src={require("./pastMedia/Cole.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/Comic01.jpg" className="galleryImage" src={require("./pastMedia/Comic01.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/Danke.jpg" className="galleryImage" src={require("./pastMedia/Danke.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/egoDeath.jpg" className="galleryImage" src={require("./pastMedia/egoDeath.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/girlFace.jpg" className="galleryImage" src={require("./pastMedia/girlFace.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/gogolStage.jpg" className="galleryImage" src={require("./pastMedia/gogolStage.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/leaves.jpg" className="galleryImage" src={require("./pastMedia/leaves.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/mirror.jpg" className="galleryImage" src={require("./pastMedia/mirror.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/moth.jpg" className="galleryImage" src={require("./pastMedia/moth.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/nemo.jpg" className="galleryImage" src={require("./pastMedia/nemo.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/pinwheelFace.jpg" className="galleryImage" src={require("./pastMedia/pinwheelFace.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/punk.jpg" className="galleryImage" src={require("./pastMedia/punk.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/stephen.jpg" className="galleryImage" src={require("./pastMedia/stephen.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/supergirl.jpg" className="galleryImage" src={require("./pastMedia/supergirl.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/tim.jpg" className="galleryImage" src={require("./pastMedia/tim.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/tree.jpg" className="galleryImage" src={require("./pastMedia/tree.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/yarnEyes.jpg" className="galleryImage" src={require("./pastMedia/yarnEyes.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/yarnHair.jpg" className="galleryImage" src={require("./pastMedia/yarnHair.jpg")} alt="" />
                    </div>

                    <div onClick={e => toggle(e)} className="imageCard">
                        <img id="./pastMedia/Cloud.jpg" className="galleryImage" src={require("./pastMedia/Cloud.jpg")} alt="" />
                    </div>

                </div>

            </div>
        </>


    )
}

export default ThePast