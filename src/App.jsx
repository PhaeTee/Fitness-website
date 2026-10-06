import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Membership from "./Pages/Membership";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import OTP from "./Pages/OTP";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Membership />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </>
  );
}

export default App;
