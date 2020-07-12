import React from "react"
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const TheHeader = (props) => {

    return (
        <div className="headerContainer">
                <img className="headerPhoto" src={require(`${props.headerURL}`)} alt="alt for image" />
        </div >
    )
}

export default TheHeader