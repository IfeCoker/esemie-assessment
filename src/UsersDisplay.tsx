import React, { useState, useEffect } from "react";
import { createServer } from "miragejs";
import data from "./data.json";
import "./App.css";

createServer({
  routes() {
    this.get("/api/users", () => {
      return data;
    });
  },
});

type User = {
  id: number;
  name: string;
  emailAddress: string;
  address: string;
  phoneNumber: string;
};

// type Detail = {
//   id: number;
//   address: string;
//   phoneNumber: string;
// };
function UserDisplaying() {
  const [users, setUsers] = useState<User[]>([]);
  const [userDetail, setUserDetail] = useState<User>({
    id: 0,
    name: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
  });
  console.log(userDetail);

  useEffect(() => {
    if (users.length === 0) {
      fetch("/api/users")
        .then((res) => res.json())
        .then((users) => {
          setUsers(users);
        });
    }
  }, [users.length]);

  const seeUserDetail = (id: any) => {
    const selectedUser = users?.find((user) => user.id === id);
    if (selectedUser) {
      setUserDetail(selectedUser);
    }
  };

  return (
    <div className="userList">
      <h1>Users List</h1>
      <div className="userDisplay">
        <div className="userCard">
          {users.map((user) => (
            <ul key={user.id} onClick={() => seeUserDetail(user.id)}>
              <div className="users">
                <li>
                  Name: {user.name} Email Address: {user.emailAddress}
                </li>
              </div>
            </ul>
          ))}
        </div>

        <div className="displayCard">
          {userDetail.name !== "" && (
            <div>
              <h2>User Details</h2>
              <div>
                <p>Name : {userDetail?.name}</p>
                <p>Email address : {userDetail?.emailAddress}</p>
                <p>Address : {userDetail?.address}</p>
                <p>Phone address : {userDetail?.phoneNumber}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDisplaying;