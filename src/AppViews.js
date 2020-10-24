import React from "react"
import { Route, Redirect } from "react-router-dom";

import PortfolioTabs from "./PortfolioTabs"
import TheNav from "./Nav"
import TheFooter from "./Footer"
import "./Portfolio.css"
import SubNav from "./SubNav"
import ThePresent from "./present/ThePresent";

const AppViews = (props) => {

    return (
        <>
            <div className="siteContainer stieBody mobileCard">
                <TheNav className="navStyle" />
                <SubNav className="navStyle" />
                <PortfolioTabs className="mobileCard"/>
                <TheFooter />
            </div>
            <React.Fragment>
                <Route path="/present" render={ThePresent}/>
            </React.Fragment>
        </>
    )
}

export default AppViews