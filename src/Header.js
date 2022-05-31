import React from "react";
import './Header.css';
import SearchBar from "../src/Components/SearchBar"
import SearchIcon from "@material-ui/icons/Search";
import BookData from "./Data.json"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
    return (
        <div className='header'>
            <img className="header_logo" src="https://upload.cc/i1/2022/05/27/Q2N3zn.png"/>
            <div className="header_search">
                {/* <SearchBar placeholder="請輸入書名..." data={BookData}/> */}
                <input className="header_searchInput" type="text"></input>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className='header_optionLineFirst'>Hello Guest</span>
                    <span className='header_optionLineSecond'>Sign In</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineFirst'>Return</span>
                    <span className='header_optionLineSecond'>Orders</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineFirst'>Your</span>
                    <span className='header_optionLineSecond'>Prime</span>
                </div>
            </div>
            
            <div className="header_shoopingCart">
                <ShoppingBasketIcon className="header_basketIcon"/>
                <span className="header_basketCount">0</span>
            </div>
        </div>
    )   
        
}

export default Header