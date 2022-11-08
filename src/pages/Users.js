import { useEffect, useState } from "react";

export function Users() {
  // Cerem lista de users de la API.
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    // Afisam datele despre useri pe ecran.
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}