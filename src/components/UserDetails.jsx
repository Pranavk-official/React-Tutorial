import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  console.log(isEditing);
  return (
    <div>
      <b>Id: </b>
      <span>{user.id}</span>
      <br />
      <b>Username: </b>
      {isEditing ? (
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      ) : (
        <span>{user.username}</span>
      )}
      <br />
      <b>Email: </b>
      {isEditing ? (
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <span>{user.email}</span>
      )}
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            setUsers((currentUsersState) =>
              currentUsersState.filter(
                (currentUser) => currentUser.id !== user.id
              )
            );
          }}
        >
          Delete
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) => {
                  if (currentUser.id === user.id)
                    return { ...currentUser, username: username, email: email };
                  else return currentUser;
                });
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),

  setUsers: PropTypes.func.isRequired,
};
