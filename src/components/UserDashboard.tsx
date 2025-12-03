import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import type { UserType } from "../types/UserType";


const UserDashboard = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("users.json");
      const data = await response.json();
      setUsers(data.users);
    };
    fetchData();
  }, []);
  return (
    <div>
      <UserForm />
      <UserList users={users} />
    </div>
  );
};

export default UserDashboard;
