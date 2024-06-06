import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContentButtons() {
  const { id, setUserData } = useContext(UserContext);

  return (
    <div>
      <br />
      <button
        onClick={() => {
          setUserData((currentState) => ({
            ...currentState,
            name: "Updated Name",
          }));
        }}
      >
        Click Me
      </button>
    </div>
  );
}
