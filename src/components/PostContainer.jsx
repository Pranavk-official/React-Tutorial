import { useState, useContext } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContainer() {
  const [data, setData] = useState("hello world");

  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>{userContextData.name}</div>
      <div>{userContextData.id}</div>
      <div>{userContextData.username}</div>

      <PostContent data={data} />
    </div>
  );
}
