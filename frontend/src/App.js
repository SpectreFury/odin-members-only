import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </main>
  );
}

export default App;
