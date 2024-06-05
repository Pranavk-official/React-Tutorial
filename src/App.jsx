import { useState, useEffect } from "react";
// import { UserDetails } from "./components/UserDetails.jsx";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    console.log("Rendering........");
    document.title = "React Tutorial";
  }, [sync]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/",
          { signal: controller.signal }
        );

        let data = await response.json();

        console.log(data);
        console.log(controller.signal);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
    return () => {
      controller.abort();
    };
  });

  return (
    <div>
      <div>
        <p>You have clicked {counter} times</p>
      </div>
      <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
      <button onClick={() => setSync((currentSync) => !currentSync)}>
        Sync
      </button>
    </div>
  );
}
