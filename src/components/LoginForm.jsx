import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick";

export function LoginForm() {
  // Sets up a resize event listener on the window.
  // The resize event listener logs the event when the window is resized.
  useEffect(() => {
    /**
     * Event handler for the resize event.
     * Logs the event and a message when the window is resized.
     *
     * @param {Event} e - The resize event.
     */
    const resizeEventHandler = (e) => {
      console.log(e);
      console.log("Window/ViewPort Resized");
    };

    // Adds the event listener to the window.
    window.addEventListener("resize", resizeEventHandler);

    // Removes the event listener from the window when the component is unmounted.
    return () => {
      console.log("Unmounting..........");
      console.log("Removing Event Listener");
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  useDocumentClick();

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
