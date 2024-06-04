import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Bookshelf from "./Pages/Bookshelf/Bookshelf";
function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookshelf" element={<Bookshelf/>}/>
      </Routes>
    </Router>
  </>
  
}

export default App;
