import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MailboxPage from "./pages/MailboxPage";
import ComposePage from "./pages/ComposePage";
import LoginPage from "./pages/LoginPage";
import Snowfall from "./Snowfall";
import SignImg from "./assets/SignPixel.png";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Snowfall />

        <div className="image-container">
          <Link to="/login">
            <img src={SignImg} alt="login" />
            <p>로그인</p>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/mailbox">
            <img src={SignImg} alt="mailbox" />
            <p>우편함</p>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/compose">
            <img src={SignImg} alt="compose" />
            <p>편지 작성하기</p>
          </Link>
        </div>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mailbox" element={<MailboxPage />} />
          <Route path="/compose" element={<ComposePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
