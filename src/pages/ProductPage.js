import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

import Data from "../productData.json";

import ProductBlock from "../components/ProductBlock";
import "./ProductPage.css";

function ProductPage(props) {
  const [productList, setProductList] = useState(Data);
  const [searchState, setSearchState] = useState(false);

  const handleSearch = (keyword) => {
    setSearchState(true);
    setProductList(
      Data.filter((product) => {
        return Object.keys(product).some((key) => {
          return product[key]
            .toString()
            .toLowerCase()
            .includes(
              keyword
                .toString()
                .toLowerCase()
            )
        });
      })
    )
  }

  return (
    <div className="product-page">
      <SearchBar onSearch={handleSearch} placeholder="請輸入書本或CD名稱" searchState={searchState} />
      <Container>
        <Row sm={2} md={3} lg={3}>
          {
            productList.map((item, index) => {
              return (
                <Col key={index}>
                  <ProductBlock item={item}/>
                </Col>
              )
            })
          }
        </Row>
      </ Container>
    </div>
  );
}

export default ProductPage;

// <div className="row justify-content-center">
//   <div className="search-result row mx-0 container">