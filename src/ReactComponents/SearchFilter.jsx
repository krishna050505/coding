
// import axios from "axios";
// import  { useEffect, useState } from "react";

// const SearchFilter = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://randomuser.me/api/?results=100")
//       .then(res => res.json())
//       .then(data => setUsers(data.results))
//       .catch(err => console.error(err));
//   }, []);

//   const filteredUsers = users.filter(user =>
//     `${user.name.first} ${user.name.last}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   return (sss
//     <div>
//       <h2>User List</h2>

//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px" }}
//       />

//       <table style={{ borderCollapse: "collapse", width: "80%", color: "brown" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid black", padding: "5px", color: "ActiveCaption" }}>
//               ID
//             </th>
//             <th style={{ border: "1px solid black", padding: "5px" }}>
//               Name
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user, index) => (
//             <tr key={index}>
//               <td style={{ border: "1px solid black", padding: "5px" }}>
//                 {index + 1}
//               </td>
//               <td style={{ border: "1px solid black", padding: "5px" }}>
//                 {user.name.first} {user.name.last}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SearchFilter;






import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) =>
        console.log("error fetching users", error)
      );
  }, []);

  return (
    <>
      <h3>List</h3>

      <input
        type="text"
        placeholder="Search by name, username, email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>UserName</td>
            <td>E-mail</td>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              const searchTerm = search.toLowerCase();
              return (
                searchTerm === "" ||
                user.name.toLowerCase().includes(searchTerm) ||
                user.username.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm)
              );
            })
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchFilter;


