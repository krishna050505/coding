import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setLoading } from "../store/Slices/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setLoading(true));
      const res = await fetch("https://randomuser.me/api/?results=100");
      const data = await res.json();
      

dispatch(setUsers(data.results));

      
      
dispatch(setLoading(false));

     
     
    }

    fetchUsers();

   
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name.first} {user.name.last}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default User;

