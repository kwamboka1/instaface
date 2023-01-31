import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";

function Menu() {
    const [open, setOpen] = useState(false);
    return (
    <header className='border-b border-gray-300 py-2'>
        <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-8% flex-wrap w-full'>
            <img src='../logo.svg' width={220} height={55} alt="LOGO"/>

            <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={()=> setOpen(!open)} />
            
            <nav className={`${open? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
                <ul className="text-base text-gray-600 lg:flex lg:justify-between" >
                    <li>
                        <a className='lg:px-5 py-2 hover:text-purple-900 font-semibold hover:underline' href='./Home.jsx'>Home</a>
                        <a className='lg:px-5 py-2 hover:text-purple-900 font-semibold hover:underline' href='./User.jsx'>User</a>
                        <a className='lg:px-5 py-2 hover:text-purple-900 font-semibold hover:underline' href='./Album.jsx'>Album</a>
                        <a className='lg:px-5 py-2 hover:text-purple-900 font-semibold hover:underline' href='./Photo.jsx'>Photo</a> 
                            
                    </li>
                </ul>
                    
            </nav>
        </div>
    </header>
  )
}

export default Menu;