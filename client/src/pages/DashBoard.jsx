import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(userLoggedIn)
    if (userLoggedIn) {
      setIsLoggedIn(true);
      console.log("changes")
    }
  }, []);
  console.log(isLoggedIn)

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (id) => {
    try {
      const response = await axios.delete(`/api/users/${id}`);
      console.log(response);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  if (!isLoggedIn) {
    return <div>Please login to view this page</div>;
  }else{
    return (
      <div className="container mx-auto m-10 p-10">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        {/* List of users */}
        <h2 className="text-2xl font-bold mb-2">Users:</h2>
        <ul>
          {users.map((user) => (
            //table of user 
            <li key={user._id} className="mb-2">
              <div className="flex justify-between">
                <div className='flex gap-4'>
                  <p>From : {user.hotelId}</p>
                  <p className="font-bold">{user.firstname} {user.lastname}</p>
                  <p>{user.email}</p>
                  <p>{user.phoneNumber}</p>
                </div>
                <button onClick={() => handleSubmit(user._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Dashboard;
