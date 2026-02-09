import React, { useEffect, useState } from "react";

const DisplayList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>

      
      <h2>User List</h2>
      <table style={{  borderCollapse: "collapse", width: "80%" ,color:"brown" }}>
        <thead>

           <tr>
            <th style={{ border: "1px solid black", padding: "5px",color:"ActiveCaption" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Name</th>
          </tr>

            </thead>
         <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "5px" }}>{index + 1}</td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {user.name.first} {user.name.last}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;
