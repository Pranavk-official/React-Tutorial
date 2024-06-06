import { useState } from "react";
// import { UserDetails } from "./components/UserDetails.jsx";

export default function App() {
  const [blogPostsData, setBlogPostsData] = useState({
    title: "",
    body: "",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (blogPostsData.title && blogPostsData.body) {
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify({
                userId: 1,
                title: blogPostsData.title,
                body: blogPostsData.body,
              }),
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => {
                return response.json;
              })
              .then((data) => {
                console.log("Success");
                console.log(data);
              })
              .catch((error) => {
                console.error(error);
              });
          }
        }}
      >
        <div>
          <label htmlFor="title">Title: </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={blogPostsData.title}
            onChange={(e) => {
              setBlogPostsData((currentBlogPostData) => ({
                ...currentBlogPostData,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body: </label>
          <br />
          <input
            type="text"
            name="body"
            id="body"
            value={blogPostsData.body}
            onChange={(e) => {
              setBlogPostsData((currentBlogPostData) => ({
                ...currentBlogPostData,
                body: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <button>Create Post</button>
        </div>
      </form>
    </div>
  );
}
