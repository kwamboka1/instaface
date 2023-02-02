import React from 'react'
import { Menu, Footer } from '.'

function Photo() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div className="User">
        <Menu />
        <button onClick={logout} className="float-right bg-white hover:text-red-800 mr-4 px-8 py-2 cursor-pointer border border-1">
          Logout
        </button>
    
        <div className="mt-20"></div>
        <Footer />
    </div>
  )
}

export default Photo

