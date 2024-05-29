import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import TestPage from "./pages-new/TestPage";
import SignPage from "./pages-new/SignPage";

import SignupPage from "./pages-new/SignupPage";

import PostboxPage from "./pages-new/PostboxPage";
import PostListPage from "./pages-new/PostListPage";

import PostPage from "./pages-new/PostPage";
import ComposePage from "./pages/ComposePage";

import Home from "./layouts/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="/login" element={<SignPage />}></Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/postbox/:user_id" element={<PostboxPage />} />
          <Route path="/postlist/:user_id" element={<PostListPage />} />
          <Route path="/post/:post_id" element={<PostPage />} />
          <Route path="/write/:post_id" element={<ComposePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
