import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Yoopla</h2>
        <Navbar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
