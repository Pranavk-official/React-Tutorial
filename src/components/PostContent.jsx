import { useContext } from "react";
import { PostContentButtons } from "./PostContentButton";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContent() {
  const userContextData = useContext(UserContext);

  return (
    <div>
      {userContextData.email}
      <PostContentButtons />
    </div>
  );
}
