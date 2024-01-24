import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import TestPage from "./pages-new/TestPage";
import SignPage from "./pages-new/SignPage";

import SignupPage from "./pages-new/SignupPage";

import PostboxPage from "./pages-new/PostboxPage";
import PostListPage from "./pages/PostListPage";

import PostPage from "./pages-new/PostPage";
import ComposePage from "./pages/ComposePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />}></Route>

        <Route path="/sign" element={<SignPage />}></Route>
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/postbox/:uuid" element={<PostboxPage />} />
        <Route path="/postlist/:uuid" element={<PostListPage />} />

        <Route path="/post/:pid" element={<PostPage />} />
        <Route path="/compose" element={<ComposePage />} />
      </Routes>
    </>
  );
};

export default App;
