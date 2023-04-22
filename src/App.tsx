import React from 'react';
import './App.css';
//import UsersListing from './usersList';
//import UsersDetails from './userDetails/UsersDetail';
import UserList from './userDetails/User';
//import DetailList from './userDetails/MoreDetails';

// import { createServer } from "miragejs";


//   createServer({
//   routes() {
    
//     this.get("/api/users", () => {
//       return  [
//           { id: 1, name: "John", emailAddress: "john@email.com" },
//           { id: 2, name: "smith", emailAddress: "smith@email.com" },
//           { id: 3, name: "Peter", emailAddress: "peter@email.com" },
//         ]
      
//     })
//   }
// })

function App() {
  return (
    <div>
      {/* <UsersListing /> */}
      <UserList />
      {/* <DetailList /> */}
    </div>
  );
}

export default App;
