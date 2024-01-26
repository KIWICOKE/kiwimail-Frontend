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
import HomeHeader from "./layouts/HomeHeader";
import HomeDefault from "./layouts/HomeDefault";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/postbox" element={<HomeDefault />}>
          <Route path=":uuid" element={<PostboxPage />} />
        </Route>
        <Route path="/postlist" element={<HomeDefault />}>
          <Route path=":uuid" element={<PostListPage />} />
        </Route>
        <Route path="/post" element={<HomeDefault />}>
          <Route path=":postid" element={<PostPage />} />
        </Route>
        <Route path="/write" element={<HomeDefault />}>
          <Route path="" element={<ComposePage />} />
        </Route>

        <Route path="/" element={<HomeHeader />}>
          <Route path="/sign" element={<SignPage />}></Route>
          <Route path="test" element={<TestPage />}></Route>
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
