import React, { useState } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

const TheNav = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand >
                    Michael Clark
                    {/* <a className="webDeveloper">web developer</a> */}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        
                        <NavItem>
                            <NavLink href="https://github.com/mister-michael">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.linkedin.com/in/michaelclarknashville/">LinkedIn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://chat.michaelclarknashville.com/sampleChatWithMichaelClarkNashville">Chat</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Web Developer</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default TheNav