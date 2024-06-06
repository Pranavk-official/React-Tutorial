import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useFetchUser } from "./utils/hooks/userFetchUser";
export default function App() {
  const { user, loading, error } = useFetchUser(4);

  console.log(user);
  console.log(loading);
  console.log(error);

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!loading && !error && user) setUserData(user);
  }, [loading, error, user]);

  console.log(loading);
  return (
    <div>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? "Loading......" : <PostContainer />}</div>
      </UserContext.Provider>
    </div>
  );
}
