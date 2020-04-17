import React from "react"
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const TheHeader = (props) => {
    return (
        <div className="headerContainer">
            {/* // <Card className="row"> */}
            {/* <CardImg top width="10%" src="/assets/318x180.svg" alt="Card image cap" /> */}
            {/* <CardImg width="20%" src={require("./headshot.png")} alt="Card image cap" className="sizeSm" /> */}
            <div className="">
                <img className="headerPhoto" src={require("./threeMikes-big.jpg")} alt="alt for image" />
            </div>
            
            {/* // </Card> */}
        </div >
    )
}

export default TheHeader