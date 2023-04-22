import React, {useState, useEffect} from "react";
// import './App.css'

//a. A list component that displays a list of users with their names and email addresses.

type User = {
    id: number,
    name: string,
    emailAddress: string,
}

function UsersListing() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("/api/users")
        .then(res => res.json())
        .then(users => {
            setUsers(users)
        })
    })

    return(
        <div className="UsersCard">
            <h1>Users List</h1>
            <div className="usersList">
                
                {
              users.map(user => <ul key={user.id}> 
              <div className="users">
              <li>
              Name: {user.name}
              </li>
              <li>
              Email Address: {user.emailAddress}
              </li>
              </div>
              
            </ul>)
            }         
            </div>
            
        </div>
    );
}

export default UsersListing