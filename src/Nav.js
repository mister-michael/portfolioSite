import React, { useState } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
                            <NavLink href="chat.michaelclarknashville.com">Chat</NavLink>
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Resume
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    View
                  </DropdownItem>
                                <DropdownItem>
                                    Download
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <NavbarText>Web Developer</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default TheNav