import React from "react";
import logo from "./assets/logo192.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-full bg-gradient-to-r from-purple-900 via-pink-500 to-purple-900 ...">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-20 pb-5 px-10 md:px-20 text-center md:text-left md:grid grid-cols-4 gap-20">
        {/* footer header */}
        <div className="col-span-2 pt-10 md:pt-0">
          <h2 className="text-2xl text-white">Do You Have Questions With Anything?</h2>
          <p className="py-6 md:pr-10 text-white">Receive Updates, sent direct to your inbox.</p>
          <div className="md:pr-10">
            <form className="relative pb-4" method="Post" action="">
              <input type={"email"} value={""} className="email rounded-full py-4 px-6 w-full text-black outline-0" placeholder="Enter email" />
              <button className="absolute right-0 rounded-full rounded-l-none py-4 px-6 bg-purple-100 hover:bg-purple-200">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-row md:flex-row justify-between py-4 items-center">
            {/* brand logo goes to top on click */}
            <div className="">
              <a className="" href="/">
                <img className="h-8 w-70" src={logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 l:pl-10 gap-10">
          {/* footer links */}
          <div className=" text-white hover:underline hover:text-purple-200">
            <h3 className="hover:no-underline">Quick Links</h3>
            <div className="py-4 ">
              <NavLink className=" block text-base" to="/">
                <p className="text-l">Home</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/Photo">
                <p className="text-l">All photos</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/User">
                <p className="text-l">DashBoard</p>
              </NavLink>
              <NavLink className="pt-4 block text-base" to="/Album">
                <p className="text-l">explore the albums</p>
              </NavLink>
            
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center py-6">
        <p className="text-white text-xs">© 2023 instaface</p>
      </div>
    </div>
  );
}

export default Footer;
