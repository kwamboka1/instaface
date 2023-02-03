import React from 'react'
import { Menu, Footer } from '..';
import AlbumDetail from './AlbumList';

const { useEffect, useState } = React;
function Album() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="User">
        <Menu />
        <button onClick={logout} className="float-right bg-white hover:text-red-800 mr-4 px-8 py-2 cursor-pointer border border-1">
          Logout
        </button>
        <div className="App">
          <AlbumDetail albums={albums} />
        </div>
    
        <div className="mt-20"></div>
        <Footer />
    </div>
);
}

export default Album
