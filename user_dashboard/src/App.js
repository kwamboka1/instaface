import React, { useEffect } from "react";
import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Album, Home, Landing, Photo, User } from "./screens";


const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/signup"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/login"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/home"
          element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="album" element={<Album />}
        />
        <Route 
          path="photo" element={<Photo />} 
        />
        <Route 
          path="user" element={<User />} 
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
