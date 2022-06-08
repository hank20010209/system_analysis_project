import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage"
import AuthorBlockListPage from "./pages/AuthorBlockListPage";
import AuthorBlockPage from "./pages/AuthorBlockPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<ProductPage/>} />
          <Route path="/AuthorBlock/List" element={<AuthorBlockListPage />} />
          <Route path="/AuthorBlock/Page" element={<AuthorBlockPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
    </div>
  );
}

export default App;
