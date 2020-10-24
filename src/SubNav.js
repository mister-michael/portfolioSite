import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

import './SubNav.css';

const SubNav = () => {


  return (
    <>
      <div className="SubNav-Container">
        <div className="SubNav-Items" >
          <NavLink className="SubNav-NavLink" href="" >Present</NavLink>
          <NavLink className="SubNav-NavLink" href="" >Past</NavLink>
          <NavLink className="SubNav-NavLink" href="" >Future</NavLink>
          <NavLink className="SubNav-NavLink" href="" >Resume</NavLink>
        </div>
      </div>
    </>
  )
};

export default SubNav;