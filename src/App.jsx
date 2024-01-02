import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ComposePage from "./pages/ComposePage";
import LoginPage from "./pages/LoginPage";

import PostboxPage from "./pages/PostboxPage";
import PostListPage from "./pages/PostListPage";
import SignPage from "./pages/SignPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignPage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/postbox" element={<PostboxPage />} />
        <Route path="/compose" element={<ComposePage />} />
        <Route path="/post" element={<PostListPage />} />
      </Routes>
    </>
  );
};

export default App;
