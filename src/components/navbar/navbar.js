import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse
} from "mdbreact";

import toggleNavbar from '../../actions/navbar'
import './navbar.css'

class Navbar extends Component {
    toggleCollapse = () => {
        this.props.toggleNavbar()
    }

    render(){
        return ( 
        <nav>
            <MDBNavbar className="h4-responsive" color = "dark-blue" dark expand = "md">
                <MDBNavbarBrand>
                    <Link to='/'><strong className = "white-text h3-responsive" > Sanditya Srivastava </strong></Link> 
                </MDBNavbarBrand> 
                <MDBNavbarToggler onClick = { this.toggleCollapse }/> 
                <MDBCollapse id = "navbarCollapse3" isOpen = { this.props.isOpen } navbar >
                    <MDBNavbarNav left style={{color: 'white'}}>
                        <MDBNavItem>
                            <MDBNavLink exact to = "/" activeClassName="navbar__link--active"
                            className="navbar__link"> About < /MDBNavLink> 
                        </MDBNavItem> 
                        <MDBNavItem >
                            <MDBNavLink to = "/education" activeClassName="navbar__link--active"
                            className="navbar__link"> Education < /MDBNavLink> 
                        </MDBNavItem> 
                        <MDBNavItem >
                            <MDBNavLink to = "/skills" activeClassName="navbar__link--active"
                            className="navbar__link"> Skills < /MDBNavLink> 
                        </MDBNavItem> 
                        <MDBNavItem >
                            <MDBNavLink to = "/work" activeClassName="navbar__link--active"
                            className="navbar__link"> Work Experience < /MDBNavLink> 
                        </MDBNavItem> 
                        <MDBNavItem >
                            <MDBNavLink to = "/awards" activeClassName="navbar__link--active"
                            className="navbar__link"> Awards < /MDBNavLink> 
                        </MDBNavItem> 
                        <MDBNavItem >
                            <MDBNavLink to = "/hobbies" activeClassName="navbar__link--active"
                            className="navbar__link"> Hobbies </MDBNavLink> 
                        </MDBNavItem> 
                        <MDBNavItem >
                            <MDBNavLink to = "/contact" activeClassName="navbar__link--active"
                            className="navbar__link"> Contact </MDBNavLink> 
                        </MDBNavItem> 
                    </MDBNavbarNav> 
                </MDBCollapse> 
            </MDBNavbar> 
        </nav>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNavbar: () => dispatch(toggleNavbar())
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.navbar.isNavbarOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)