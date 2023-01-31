import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/ContextAuth";
import AdminMenu from "./AdminMenu";
import "./AllUsers.css";

export default function AllUsers() {
  const { auth } = useContext(AuthContext);
  const [takeData, setTakeData] = useState({});
  const [users, setUsers] = useState([]);
  const [roleChange, setRoleChange] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  const handleChange = (event, user) => {
    setTakeData({ ...takeData, [user.id]: event.target.value });
  };
  const handleUpdateClick = (user) => {
    fetch(`http://localhost:5000/users/role/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ id: user.id, role: takeData[user.id] }),
    })
      .then((res) => {
        console.warn(res);
        console.warn(takeData[user.id]);
        setRoleChange(true);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="allUsers">
      <AdminMenu />
      <div>
        {users.map((user) => (
          <div className="boxUser">
            <table className="table">
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <select
                      value={takeData[user.id] || user.role}
                      name="role"
                      onChange={(e) => {
                        handleChange(e, user);
                      }}
                    >
                      <option value="admin">Admin</option>
                      <option value="visitor">Visitor</option>
                    </select>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="register_btn"
                      onClick={() => handleUpdateClick(user)}
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        {roleChange && <p className="RoleModifié">Rôle modifié</p>}
      </div>
    </div>
  );
}
