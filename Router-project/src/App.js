import "./App.css";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import { useState } from "react";
import PrivateRoute from "./Component/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full h-full bg-rose-500 ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}> <Dashboard /></PrivateRoute>

        } />
      </Routes >


    </div >
  )
}

export default App;
