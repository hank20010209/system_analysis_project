import React from "react";
import {Link} from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Navbar, Nav, Container} from 'react-bootstrap';
import './Header.css';
import {useStateValue} from "../components/StateProvider";

function Header() {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         basket: 0
    //     };
    // }
    //const [count, setCount] = useState(0);
    const[{basket}, dispatch] = useStateValue();
    // render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Link to="/">
                            <img className="header_logo" src="https://upload.cc/i1/2022/05/27/Q2N3zn.png" alt='logo' />
                            </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">
                                <div className="header_option">
                                    首頁
                                </div>
                            </Nav.Link>
                            <Nav.Link href="/AuthorBlock/List">
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
                            <Nav.Link href="/Checkout">
                                <div className='header_option'>
                                    <ShoppingBasketIcon className="header_basketIcon" />
                                    <span className="header_basketCount">{basket?.length}</span>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        );
    }
// }

export default Header
