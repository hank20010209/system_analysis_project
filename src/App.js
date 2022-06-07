import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage"
import AuthorBlockListPage from "./pages/AuthorBlockListPage";
import AuthorBlockPage from "./pages/AuthorBlockPage";
import Login from "./pages/Login";
import "./App.css";



function App() {
  const [authentication , setauthentication ] = useState(JSON.parse(sessionStorage.getItem('authentication')) || {});

  const handleLogin = (result) => {
    setauthentication (result);
    sessionStorage.setItem('authentication',JSON.stringify(result));
  }

  return (
    <div className="App">
      <Header authentication ={authentication }/>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/AuthorBlock/List" element={<AuthorBlockListPage authentication ={authentication }/>} />
        <Route path="/AuthorBlock/Page/:id" element={<AuthorBlockPage authentication ={authentication }/>} />
        <Route path="/login" element={<Login onLogin={handleLogin} authentication ={authentication }/>} />
      </Routes>
    </div>
  );
}

export default App;
