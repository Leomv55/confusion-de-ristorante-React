import React from 'react';
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap';

export default function Header(){
    return(
        <>
            <Navbar dark sticky="top" color="primary" className="navbar-dark">
                <div className="container">
                    <NavbarBrand href="/">
                        Confusion De Restorante
                    </NavbarBrand>
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
        </>
    );
}