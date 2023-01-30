import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from ".";

// Pass User
const Home = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
    if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
          return (
            <>
              <Menu /> 
              <button onClick={logout} className="float-right bg-white hover:text-red-800 mr-4 px-8 py-2 cursor-pointer border border-1"    
                  >
                    Logout
                  </button>
              <div className="m-12">
                <p className="start">Dear {user?.email}</p> 
                    <em><small>
                      You are viewing this page because you are logged in or you just signed
                      up
                    </small></em><br />
                
                <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-orange-500 text-center inline-block font-bold">DashBoard</h1><hr />
                  
                <table>
                  <th>Users</th><br />
                    <ul>
                      {users.map(user => (
                        <li className="hover:text-purple-900 hover:underline">
                            <Link to={`user/${user.id}`}>{user.name} {user.album}</Link>
                        </li>
                      ))}   
                    </ul>
                  <th>Album</th>
                </table>
              </div>
          </>
          );
        };
};

export default Home;
