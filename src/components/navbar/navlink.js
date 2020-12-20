import React from 'react'

import {
    MDBNavItem,
    MDBNavLink,
} from "mdbreact";

const NavLink = (props) => {
    const { url, name, exact } = props
    return (
        <MDBNavItem>
            <MDBNavLink exact={exact} to = { url } activeClassName="navbar__link--active"
            className="navbar__link"> { name } < /MDBNavLink> 
        </MDBNavItem>
    )
}

export default NavLink