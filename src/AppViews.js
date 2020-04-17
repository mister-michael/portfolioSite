import React from "react"
import TheNav from "./Nav"
import PortfolioTabs from "./PortfolioTabs"
import "./Portfolio.css"

const AppViews = (props) => {

    return (
        <>
            <div className="siteContainer">
                <TheNav className="navStyle"/>
                <PortfolioTabs />
            </div>
        </>
    )
}

export default AppViews