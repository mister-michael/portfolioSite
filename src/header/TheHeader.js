import React from "react"

const TheHeader = (props) => {

    return (
        <div className="headerContainer">
                <img className="headerPhoto" src={require(`${props.headerURL}`)} alt="" />
        </div >
    )
}

export default TheHeader