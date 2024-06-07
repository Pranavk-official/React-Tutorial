import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useFetchUser } from "./utils/hooks/userFetchUser";
import { Outlet, Link, useNavigate } from "react-router-dom";
export default function App() {
  const { user, loading, error } = useFetchUser(4);

  console.log(user);
  console.log(loading);
  console.log(error);

  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error && user) {
      setUserData(user);
      navigate("/users");
    }
  }, [loading, error, user, navigate]);

  console.log(loading);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/blog-posts">Blog Posts</Link>
          </li>
        </ul>
      </nav>

      <div>
        <label htmlFor="data">Enter Data</label>
        <input
          type="text"
          name="data"
          id="data"
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value.length > 10) {
              navigate("/blog-posts", {
                state: {
                  posts: [
                    {
                      id: 1,
                      title: "New Title",
                      content: "New Title content",
                    },
                    {
                      id: 2,
                      title: "New Title",
                      content: "New Title content",
                    },
                  ],
                },
              });
            } else {
              navigate("/");
            }
          }}
        />
      </div>

      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? "Loading......" : <PostContainer />}</div>
      </UserContext.Provider>
      <Outlet />
    </>
  );
}
