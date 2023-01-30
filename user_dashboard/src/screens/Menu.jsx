import React from 'react';


function menu() {
  return (
    <header className='border-b border-gray-300 py-2'>
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
            <image src='../logo.svg' width={220} height={55} />
            <nav className='flex items-center w-auto'>
                <ul className='text-base text-gray-600 flex justify-between'>
                    <li>
                        <a className='px-5 py-2 hover:text-purple-900 font-semibold' href='./Home.jsx'>Home</a>
                        <a className='px-5 py-2 hover:text-purple-900 font-semibold' href='./User.jsx'>User</a>
                        <a className='px-5 py-2 hover:text-purple-900 font-semibold' href='./Album.jsx'>Album</a>
                        <a className='px-5 py-2 hover:text-purple-900 font-semibold' href='./Photo.jsx'>Photo</a> 
                        
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default menu
