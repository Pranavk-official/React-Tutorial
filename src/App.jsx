import { useState } from "react";
import { LoginForm } from "./components/LoginForm";

export default function App() {
  const [toggle, setToggle] = useState(false);
  // The component renders an empty div element.
  return (
    <div>
      <div>
        <button
          onClick={() =>
            setToggle((currentState) => (currentState = !currentState))
          }
        >
          Toggle
        </button>
      </div>

      <div>{toggle && <LoginForm />}</div>
    </div>
  );
}
