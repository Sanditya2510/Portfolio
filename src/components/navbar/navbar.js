import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdbreact";

import toggleNavbar from '../../actions/navbar'
import './navbar.css'
import NavLink from './navlink'

class Navbar extends Component {
    toggleCollapse = () => {
        this.props.toggleNavbar()
    }

    render(){
        const navtabs = [
            {url: '/', name: 'About', exact: true},
            {url: '/education', name: 'Education', exact: false},
            {url: '/skills', name: 'Skills', exact: false},
            {url: '/work', name: 'Work Experience', exact: false},
            {url: '/awards', name: 'Awards', exact: false},
            {url: '/hobbies', name: 'Hobbies', exact: false},
            {url: '/contact', name: 'Contact', exact: false}
        ]

        return ( 
        <nav>
            <MDBNavbar className="h4-responsive" color = "dark-blue" dark expand = "md">
                <MDBNavbarBrand>
                    <Link to='/'><strong className = "white-text h3-responsive" > Sanditya Srivastava </strong></Link> 
                </MDBNavbarBrand> 
                <MDBNavbarToggler onClick = { this.toggleCollapse }/> 
                <MDBCollapse id = "navbarCollapse3" isOpen = { this.props.isOpen } navbar >
                    <MDBNavbarNav left style={{color: 'white'}}>
                        {
                            navtabs.map( tab => {
                                return (
                                    <NavLink url={tab.url} name={tab.name} exact={tab.exact} />
                                )
                            })
                        }
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