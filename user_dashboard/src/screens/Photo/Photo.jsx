import React from 'react'
import { Menu, Footer } from '..';
import AlbumDetail from '../Album/AlbumList';



const { useEffect, useState } = React;
function Photo() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?userId")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
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
          <AlbumDetail photos={photos} />
        </div>
    
        <div className="mt-20"></div>
        <Footer />
    </div>
);
}

export default Photo;
