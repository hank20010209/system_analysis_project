import React from "react";
import Header from "./Header";
import SearchBar from "../src/Components/SearchBar"
import "./App.css";
import BookData from "./Data.json"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar placeholder="請輸入書名..." data={BookData}/>
      {/* <SearchList/> */}
    </div>
  );
}

export default App;
