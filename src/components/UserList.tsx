import type { UserType } from "../types/UserType";

interface UserListProps {
    users:UserType[]
}
const UserList = ({users}:UserListProps) => {
  return (
    <div className="p-3">
        <table className="w-full border">
            <thead className="bg-gray-100">
                <tr >
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList;
