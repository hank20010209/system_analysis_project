import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage"
import AuthorBlockListPage from "./pages/AuthorBlockListPage";
import AuthorBlockPage from "./pages/AuthorBlockPage";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage/>} />
        <Route path="/AuthorBlock/List" element={<AuthorBlockListPage />} />
        <Route path="/AuthorBolck/Page" element={<AuthorBlockPage />} />
      </Routes>
    </div>
  );
}

export default App;
