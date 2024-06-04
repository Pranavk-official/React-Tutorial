import { useState } from "react";

export function RegisterForm() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  console.log(formFields);

  return (
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formFields.username}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              username: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name: </label>
        <input
          type="text"
          id="displayName"
          name="displayName"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              displayName: e.target.value,
            }));
          }}
        />
      </div>

      <div>
        <span>Username: {formFields.username}</span>
      </div>
      <div>
        <span>Password: {formFields.password}</span>
      </div>
      <div>
        <span>Display Name: {formFields.displayName}</span>
      </div>

      {/* <button disabled={isDisabled}>Sign Up</button> */}
    </form>
  );
}
