import React, { useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TheHeader from "./header/TheHeader"
import ThePresent from "./present/ThePresent"
import ThePast from "./past/ThePast"
import TheFuture from "./future/TheFuture"
import Resume from "./resume/Resume"
import './Portfolio.css'

const PortfolioTabs = (props) => {

    const [activeTab, setActiveTab] = useState('4');

    const goToPast = () => {
        window.scrollTo(0, 0)
        setActiveTab("1")
    }

    const goToFuture = () => {
        window.scrollTo(0, 0)
        setActiveTab("3")
    }

    const goToPresent = () => {
        window.scrollTo(0, 0)
        setActiveTab("2")
    }

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                </NavItem>

                <NavItem className="hoverPointer" >
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}>
                        Present
                    </NavLink>
                </NavItem>
                <NavItem className="hoverPointer" >
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Past
                    </NavLink>
                </NavItem>
                <NavItem className="hoverPointer" >
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Future
                    </NavLink>
                </NavItem>
                <NavItem className="hoverPointer" >
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        Resume
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent className="page-container" activeTab={activeTab}>
                

                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <TheHeader headerURL={"./threeMikes-left-focus.jpg"} />
                            <div className="siteBody">
                                <ThePast
                                    setActiveTab={setActiveTab}
                                    goToFuture={goToFuture}
                                    toggle={toggle}
                                    {...props}
                                />
                            </div>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <TheHeader headerURL={"./threeMikes-big.jpg"} />
                    <ThePresent
                        setActiveTab={setActiveTab}
                        goToPast={goToPast}
                        {...props}
                        toggle={toggle} />
                </TabPane>

                <TabPane tabId="3">
                    <TheHeader headerURL={"./threeMikes-right-focus.jpg"} />
                    <TheFuture
                        setActiveTab={setActiveTab}
                        {...props}
                        toggle={toggle} />
                </TabPane>

                <TabPane tabId="4">
                    {/* <TheHeader headerURL={"./threeMikes-big.jpg"} /> */}
                    <Resume
                        className="siteBody"
                        toggle={toggle}
                        setActiveTab={setActiveTab}
                        goToFuture={goToFuture}
                        goToPast={goToPast}
                        goToPresent={goToPresent}
                        {...props}
                    />
                </TabPane>
            </TabContent>
        </div>
    );

}

export default PortfolioTabs