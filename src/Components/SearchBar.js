import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import "./SearchBar.css";

function SearchBar(props) {
    const [keyword, setKeyword] = useState("");

    const handleSearchChange = (event) => {
        setKeyword(event.target.value);
    };

    const search = () => {
        if(props.onSearch){
            props.onSearch(keyword);
        }
    }

    const clearSearch = () => {
        setKeyword("");
    };

    const searchState = props.searchState || false;
    const placeholder = props.placeholder || "";

    return (
        <div className="search">
            <input type="text" className="from-control" value={keyword} onChange={handleSearchChange} placeholder={placeholder} />
            <div className="search-icon">
                {keyword && searchState ?
                    <CloseIcon id="clearBtn" onClick={clearSearch} /> :
                    <SearchIcon onClick={search} />
                }
            </div>
        </div>
    );
}

export default SearchBar;
