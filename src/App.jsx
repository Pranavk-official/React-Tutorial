// import { UserDetails } from "./components/UserDetails";

import { UserDetails } from "./components/UserDetails";

export default function App() {
  const mockUser = [
    {
      id: 1,
      username: "anson",
      email: "anson@react.com",
    },
    {
      id: 2,
      username: "mikela",
      email: "mikela@react.com",
    },
    {
      id: 3,
      username: "tyson",
      email: "tyson@react.com",
    },
  ];

  return (
    <div>
      {mockUser.map((user) => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </div>
  );
}
