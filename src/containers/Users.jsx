import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/API';
import UserTable from "../components/userTable/UserTable"; 
import UserForm from "../components/userForm/UserForm";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  },[])
  
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h2">Users</h1>
      </div>
      <div className="users-content">
        <UserForm />
        <UserTable users={users}/>
      </div>
    </main>
  );
}

export default Users;
// user form
// user table
// add member button
// edit member button