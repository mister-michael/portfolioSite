import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; import Skills from "../present/Skills"
import "./thePast.css"

const ThePast = (props) => {

    const { button, className } = props

    const [modal, setModal] = useState(false);
    const [image, setImage] = useState(null)

    const toggle = (e) => {
        setImage(e.target.id)
        setModal(!modal)
                // setModal(!modal);
    }

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const indentLarge = () => <a className="indentLarge"></a>

    useEffect(() => {

    }, [image])

    return (
        <>
            <div className="detailsCard pageBody">
                <a className="indent"></a>
                <div className="subText">
                    <a className="biggerFont"><a className="indent"></a>We </a>are currently in the...</div>
                <div className="marginBottom60">
                    <h1 className="headlineText borderBottom marginBottom3"><a className="indentLarge"></a>"Past"</h1>
                </div>

                <div className="gallery">
                    {image !== null ?
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                <img className="galleryImage" src={require(`${image}`)} alt="alt for image" />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal> : null}

                    <div
                        
                        onClick={e => toggle(e)}
                        className="imageCard">
                        <img id="./pastMedia/BigScreen.jpg" className="galleryImage" src={require("./pastMedia/BigScreen.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/Cole.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/Comic01.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/Danke.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/egoDeath.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/girlFace.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/gogolStage.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/leaves.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/mirror.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/moth.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/nemo.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/pinwheelFace.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/punk.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/stephen.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/supergirl.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/tim.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/tree.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/yarnEyes.jpg")} alt="alt for image" />
                    </div>

                    <div className="imageCard">
                        <img className="galleryImage" src={require("./pastMedia/yarnHair.jpg")} alt="alt for image" />
                    </div>

                </div>

            </div>
        </>


    )
}

export default ThePast