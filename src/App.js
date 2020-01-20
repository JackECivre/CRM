import React from 'react';
import "./css/App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import DisplayBox from "./components/displayBox"

function App() {
  return (

    <Router>
      <div className="container">
        <Navbar />
        <Menu />

        <div className="displayContainer">
          <DisplayBox />
        </div>


      </div>

    </Router>

  );
}

export default App;
