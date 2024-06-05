import { useState, useEffect } from "react";
// import { UserDetails } from "./components/UserDetails.jsx";

export default function App() {
  const [counter, setCounter] = useState(0);

  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("Rendering........");
    document.title = "React Tutorial";
  }, [sync]);

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
