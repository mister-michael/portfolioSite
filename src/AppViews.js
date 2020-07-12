import React from "react"
import TheNav from "./Nav"
import PortfolioTabs from "./PortfolioTabs"
import TheFooter from "./Footer"
import "./Portfolio.css"

const AppViews = (props) => {

    return (
        <>

            <div className="siteContainer stieBody">
                <TheNav className="navStyle" />
                <PortfolioTabs />
                <TheFooter />
            </div>
        </>
    )
}

export default AppViews