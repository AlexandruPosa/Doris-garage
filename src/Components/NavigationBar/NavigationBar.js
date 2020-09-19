import React, { Component } from "react";
import { MDBNav, MDBRow, MDBNavLink } from "mdbreact";


class NavigationBar extends Component {
    render() {
        return (
            <header>
                <div className="navigationBar-container" >


                    <MDBNav >

                        <MDBRow >

                            <MDBNavLink size='10' to="/">Acasa</MDBNavLink>
                            <MDBNavLink to="Despre-noi">Despre noi</MDBNavLink>
                            <MDBNavLink to="Galerie">Galerie</MDBNavLink>
                            <MDBNavLink to="Servicii">Servicii</MDBNavLink>
                            <MDBNavLink to="Contact">Contact</MDBNavLink>

                        </MDBRow>
                    </MDBNav>

                </div >
            </header >

        )
    }
}

export default NavigationBar;