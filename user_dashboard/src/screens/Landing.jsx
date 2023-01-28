import React from "react";
import { Link } from "react-router-dom";
import { Login, Signup } from ".";

const Landing = () => {
  return (
    <div className="bg-[url('/hero-section.svg')]">
      <div>
          <div className="text-center">
            <h1 className="text-6xl text-white pt-40 font-serif">Welcome to Instaface <br/>Dashboard</h1>
          <p className="text-white text-2xl p-6 text-justify-center font-sans"> Instaface is a platform to share and view photos, If you want to have a look and a feel <br/>how it is used, be sure to signUp
            to unlock the privilleges that comes with it. Have fun!</p>
          </div>  
        <main className="flex justify-center gap-x-8 pb-56">
          <Link
            to="/signup"
            className="no-underline px-4 py-4 text-white"
          >
            <Signup />
          </Link>
          <Link
            to="/login"
            className="no-underline px-2 py-4 text-white"
          >
            {/* <small className="pt-4 text-yellow-300">Alreaady have an account? </small> */}
            <Login />
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Landing;
