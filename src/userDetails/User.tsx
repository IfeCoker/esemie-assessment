import React, {useState, useEffect} from "react"
import DetailList from "./MoreDetails";
import { createServer } from "miragejs";
import data from '../data.json'
import '../App.css'

createServer({
    routes() {
      this.get("/api/users", () => {
        return data;      
      })
    }
  })

type User = {
    id: number,
    name: string,
    emailAddress: string,
}

type Detail = {
    id: number,
    address: string,
    phoneNumber: string,
}
function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [userDetail, setUserDetail] = useState<Detail[]>([]);

    useEffect(() => {
        fetch("/api/users")
        .then(res => res.json())
        .then(users => {
            setUsers(users)
        })
    })

    const handleClick = () => {
        const findUser = users.find(id)
        setUserDetail(findUser)        
    }

    return (
        <div className="userCard">
            <h1>Users List</h1>
            <div className="userDisplay">
            <div>
                {
              users.map(user => <ul key={user.id}> 
              <div className="users" onClick={handleClick}>
              <li>
              Name: {user.name} Email Address: {user.emailAddress}
              </li>
              </div>
              
            </ul>)} 
            </div>

            {/* <DetailList /> */}
            </div>
            
        </div>
    )
}

export default UserList


// import DetailList from "./MoreDetails"
// import { Routes, Route, Link } from "react-router-dom";
// //b. A details component that displays detailed information about 
// //a selected user, such as name, email, address, and phone number.
// function UserList() 
//     return (
//         <div>
//             <h1>Users List</h1>
//             <ul>
//                 <li>user 1</li>
//                 <li>user 2</li>
//                 <li>user 3</li>
//                 <li>user 4</li>
//             </ul>
//             <Link to="/more-details">DetailList</Link>
//             <Routes>                
//                 <Route path="/more-details" element={<DetailList/>}/>
//             </Routes>            
//         </div>
//     )
// }
// export default UserList