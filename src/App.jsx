import React from "react";
import { Route, Routes } from "react-router-dom";

import TestPage from "./pages/TestPage";
import SignPage from "./pages/SignPage";

import SignupPage from "./pages/SignupPage";

import PostboxPage from "./pages/PostboxPage";
import PostListPage from "./pages/PostListPage";

import PostPage from "./pages/PostPage";
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
