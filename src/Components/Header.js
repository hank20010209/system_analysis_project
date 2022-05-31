import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img className="header_logo" src="https://upload.cc/i1/2022/05/27/Q2N3zn.png" alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">
                                <div className="header_option">
                                    首頁
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/AuthorBlock">
                                <div className="header_option">
                                    作家專欄
                                </div>
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/login">
                                <div className="header_option">
                                    <span className='header_optionLineFirst'>Hello Guest</span>
                                    <span className='header_optionLineSecond'>Sign In</span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/order">
                                <div className="header_option">
                                    <span className='header_optionLineFirst'>Return</span>
                                    <span className='header_optionLineSecond'>Orders</span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/profile">
                                <div className="header_option">
                                    <span className='header_optionLineFirst'>Your</span>
                                    <span className='header_optionLineSecond'>Prime</span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/shopingCart">
                                <div className='header_option'>
                                    <ShoppingBasketIcon className="header_basketIcon" />
                                    <span className="header_basketCount">0</span>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        )
    }
}

export default Header
    // < div className = 'header' >
    //             <img className="header_logo" src="https://upload.cc/i1/2022/05/27/Q2N3zn.png" />
    //             <div className="header_option">
    //                 <a href=''>首頁</a>
    //             </div>
    //             <div className="header_option">
    //                 <a href=''>作家專欄</a>
    //             </div>
    //             <div className="header_nav">
    //                 <div className="header_option">
    //                     <span className='header_optionLineFirst'>Hello Guest</span>
    //                     <span className='header_optionLineSecond'>Sign In</span>
    //                 </div>
    //                 <div className="header_option">
    //                     <span className='header_optionLineFirst'>Return</span>
    //                     <span className='header_optionLineSecond'>Orders</span>
    //                 </div>
    //                 <div className="header_option">
    //                     <span className='header_optionLineFirst'>Your</span>
    //                     <span className='header_optionLineSecond'>Prime</span>
    //                 </div>
    //             </div>

    //             <div className="header_shoopingCart">
    // <ShoppingBasketIcon className="header_basketIcon" />
    // <span className="header_basketCount">0</span>
    //              </div>
    //         </div >