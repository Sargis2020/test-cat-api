import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Layout />}>
        <Route index element={<Categories />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
