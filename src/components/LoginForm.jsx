export function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const password = formData.get("password");

        fetch("/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
      }}
    >
      <label htmlFor="username">Username: </label>
      <br />
      <input
        name="username"
        type="text"
        id="username"
        onChange={(e) => {
          console.log(`Username: ${e.target.value}`);
        }}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <br />
      <input
        name="password"
        type="password"
        id="password"
        onChange={(e) => {
          console.log(`Password: ${e.target.value}`);
        }}
      />
      <br />
      <button>Login</button>
    </form>
  );
}
