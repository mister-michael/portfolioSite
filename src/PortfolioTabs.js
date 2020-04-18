import React, { useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TheHeader from "./header/TheHeader"
import ThePresent from "./present/ThePresent"
import ThePast from "./past/ThePast"
import Home from "./home/Home"

const PortfolioTabs = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Past
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        <a className="">Present</a>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Future
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="4">
                    <TheHeader />
                    <Home toggle={toggle} />
                </TabPane>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <TheHeader />
                            <div className="siteBody">
                                <ThePresent
                                />
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <TheHeader />
                    <ThePast toggle={toggle}/>
                </TabPane>
                <TabPane tabId="3">
                    <TheHeader />
                    <div>Future</div>
                </TabPane>
            </TabContent>
        </div>
    );

}

export default PortfolioTabs