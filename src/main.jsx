import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home";
import Details from "./pages/Details";
import "../src/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
)
