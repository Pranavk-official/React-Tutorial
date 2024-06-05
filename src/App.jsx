import { useState } from "react";
import { UserDetails } from "./components/UserDetails.jsx";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(4);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "anson",
      email: "anson@dev.com",
    },
    {
      id: 2,
      username: "brad",
      email: "brad@dev.com",
    },
    {
      id: 3,
      username: "chad",
      email: "chad@dev.com",
    },
  ]);

  return (
    <div>
      <div>
        <h2>Add User</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newUser = {
            id: counter,
            username,
            email,
          };

          setCounter((currentCounter) => currentCounter + 1);
          setUsers((currentUsersState) => [...currentUsersState, newUser]);
        }}
      >
        <div>
          <div>
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button>Add User</button>
          </div>
        </div>
      </form>
      <br />
      <hr />
      <br />
      <div>
        <h2>User Details</h2>
      </div>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
