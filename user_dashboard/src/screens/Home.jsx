import React, { useState, useEffect } from "react";

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
            <div className="text-center m-12">
              <h1>Dear {user?.email}</h1>
        
              <span>
                You are viewing this page because you are logged in or you just signed
                up
              </span>
        
              <div>
                <button onClick={logout} className="text-red bg-white py-2 px-4 cursor-pointer border border-black"    
                >
                  Logout
                </button>
              </div>
              <h1>DashBoard</h1>
                <ul>
                  {users.map(user => (
                  <li key={user.id}>
                      {user.name} 
                  </li>
                  ))}
                </ul>
              
            </div>
          );
        };        
     
};

export default Home;
