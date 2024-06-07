import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function BlogPostsPage() {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  return (
    <div>
      <div>
        <h1>Welcome To Blog Posts Page</h1>
      </div>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.id}</h3>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
