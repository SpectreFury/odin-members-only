import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      ;
    </main>
  );
}

export default App;
