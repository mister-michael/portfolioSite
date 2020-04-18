import React from "react"
import TheNav from "./Nav"
import PortfolioTabs from "./PortfolioTabs"
import TheFooter from "./Footer"
import "./Portfolio.css"

const AppViews = (props) => {

    return (
        <>
                <TheNav className="navStyle"/>
            <div className="siteContainer">
                <PortfolioTabs />
                <TheFooter />
            </div>
        </>
    )
}

export default AppViews