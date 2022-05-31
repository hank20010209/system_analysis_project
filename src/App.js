import React from "react";
import Header from "./Components/Header";
import ProdjctPage from "./Components/ProductPage"
import BookData from "./Data.json"
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <ProdjctPage placeholder="請輸入書名..." data={BookData}/>
    </div>
  );
}

export default App;
