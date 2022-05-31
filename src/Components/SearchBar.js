import React, { useState } from "react";
import "./SearchBar.css";
import "../Header.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import Data from "../Data.json";

import ProductBlock from "./ProductBlock";

function SearchBar({ placeholder, data }) {
  const [wordEntered, setWordEntered] = useState("");
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = Data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const clearInput = () => {
    searchText();
    setWordEntered("");
  };

  return (
    <section className="py-5 container">
      <div className="row justify-content-center">
        <div className="search-result row mx-0 container">
          <div className="search">
            <div className="searchInputs">
              <input
                type="text"
                class="from-control"
                value={filter}
                // onClick={searchText.bind(this)}
                onChange={searchText}
                placeholder="請輸入書本或CD名稱"
              />
              <div className="searchIcon">
                {filter.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
              </div>
            </div>
          </div>
          {dataSearch.map((item,index) => {
            return<ProductBlock item={item} key={index}/>
          })}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
