import React from "react"; // Import React from 'react'
import ReactDOM from "react-dom/client"; // Import ReactDOM from 'react-dom/client'
import App from "./App";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersPages } from "./pages/UsersPage";
import { BlogPostsPage } from "./pages/BlogPostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "users",
        element: <UsersPages />,
      },
      {
        path: "/blog-posts",
        element: <BlogPostsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
