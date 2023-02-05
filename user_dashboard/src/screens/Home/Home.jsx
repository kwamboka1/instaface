import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Footer } from "..";

// Pass User
const Home = ({ users, user, albums }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (users.length>0){
      setIsLoaded(true)
    }
    
      }, [users])
    
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
          return (
            <>
              <Menu /> 
              <button onClick={logout} className="float-right bg-white hover:text-red-800 mr-4 px-8 py-2 cursor-pointer border border-1"    
                  >
                    Logout
              </button>
              <div className="grid place-content-center">
                <p className="text-xl text-purple-900"> Dear <span className="start text-blue-900 underline text-sm">{user?.email} ,</span> </p>
                    <small className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-orange-500">
                      <em>You are viewing this page because you are logged in or you just signed
                      up, Have fun!</em>
                    </small>&#128540;
                
                <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-orange-500 inline-block font-bold">DashBoard</h1><hr />
                  
                <tbody className=" border-spacing-4 border border-purple-200 my-12">
                  <tr>
                    <th class="text-2xl text-purple-900 border border-none border-separate border-spacing-2">Users</th>
                    <th class="border border-none text-2xl text-purple-900 pl-48  ">Number of Albums</th>
                      
                  </tr><hr />
                  {users.map((user, album) => (
                    <div className="hover:bg-purple-300 pl-1">
                      <tr key={album}>
                        <td className="border border-none ">
                          <p className=" hover:text-purple-900 hover:underline">
                            <Link to={`/user/${user.id}`}>{user.name} </Link></p>
                        </td>
                        <td className="pl-44">
                          {albums.filter(album => album.userId === user.id).length}
                        </td>
                        
                      </tr><hr />
                    </div>
                  ))}
                </tbody>
              </div>
              <Footer />
          </>
          );
        };
};

export default Home;
