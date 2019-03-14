import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Collapse,NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import Nav from "reactstrap/es/Nav";
import NavItem from "reactstrap/es/NavItem";
export default class Header extends Component{
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen:false
        }
    }
    toggleNav(){
        this.setState(
            {
                isNavOpen:!this.state.isNavOpen
            }
        )
    }
    render() {

        return(
            <div className="nav-stripe">
                <Navbar dark sticky="top" color="primary" expand="md">
                    <div className="container navbar-ic">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Logo"/>
                            Confusion De Restorante
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="nav-contents">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg"></i> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <i className="fa fa-list fa-lg"></i> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg"></i> Contact Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg"></i> About Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <h1>
                                Confusion De Resturante
                            </h1>
                            <p>
                                We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
                            </p>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }

}