import React, { useEffect } from "react";
import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import useGetdata from "./hooks/useGetdata";
import { Album, Home, Landing, Photo, User } from "./screens";


const App = () => {
  const [user, setUser] = useState({});
  // const [users, setUsers]=useState([]);
  // const [albums, setAlbums]=useState([]);
  const [albums, errors]=useGetdata("/albums");
  const [users, ]=useGetdata("/users");
  const [photos, ]=useGetdata("/photos");

  console.log(albums, errors);
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  // console.log({user})
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
          element={user?.email ? <Home user={user} users={users} albums={albums} /> : <Navigate to="/" />}
        />
        <Route
          path="album" element={<Album />}
        />
        <Route 
          path="/photo/:id" element={<Photo photos={photos} />} 
        />
        <Route 
          path="/user/:id" element={<User albums={albums} />} 
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
