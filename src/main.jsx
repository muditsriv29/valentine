import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./App";
import LoveLetter from "./LoveLetter";
import Layout from "./Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/love-letter" element={<LoveLetter />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
