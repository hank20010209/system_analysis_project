import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductPage from "./Components/ProductPage"
import BookData from "./Data.json"
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage placeholder="請輸入書名..." data={BookData} />} />
      </Routes>
    </div>
  );
}

export default App;
