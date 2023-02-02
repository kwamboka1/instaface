import React from "react";
import { Link } from "react-router-dom";
import { Login, Signup } from ".";

const Landing = () => {
  return (
    <div className="bg-[url('/hero-section.svg')]">
        <div>
            <div className="text-center xl:max-w-7xl xl:mx-auto max-w-full px-8% flex-wrap">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400 inline-block font-bold text-6xl pt-40 font-serif">Welcome to Instaface <br/>Dashboard</h1>
                <p className="text-white text-2xl p-6 text-justify-center font-sans flex-col"> Instaface is a platform to share and view photos, If you want to have a look and a feel how it is used, be sure to signUp
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
                <Login />
              </Link>
          </main>
        </div>
    </div>
  );
};

export default Landing;
