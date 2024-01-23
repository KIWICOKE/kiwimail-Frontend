import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ComposePage from "./pages/ComposePage";
import LoginPage from "./pages-new/LoginPage";

import PostboxPage from "./pages-new/PostboxPage";
import PostListPage from "./pages/PostListPage";
import SignPage from "./pages-new/SignPage";

import TestPage from "./pages-new/TestPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />}></Route>
        <Route path="/sign" element={<SignPage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/postbox" element={<PostboxPage />} />
        <Route path="/compose" element={<ComposePage />} />
        <Route path="/post" element={<PostListPage />} />
      </Routes>
    </>
  );
};

export default App;
