/* eslint-disable-next-line no-use-before-define */
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="text-center p-2">
      <h1 className="font-bold text-3xl text-gray-800 my-2">
        Fetch and list products{" "}
        <span role="img" aria-label="Shop">
          🛒
        </span>
      </h1>
      <p className="my-2 border-t-2 p-4 mb-6">
        Use React Hooks to fetch and display products from the provided API.
      </p>
      <div className="my-2 font-medium text-xl m-8">
        <p className="bg-gray-800 text-white shadow-md rounded p-4">
          As a user, I want to see the name and image of the first 5 products, so I know what's in
          store.
        </p>
        <p className="text-gray-700 italic text-sm p-2">
          Feel free to create new files where needed. Using TypeScript is a nice-to-have. Tailwind
          is available if you wish to use it. You can use <code>REACT_APP_API_URL</code> env var.
        </p>
      </div>
      <pre>
        <code>API URL: {process.env.REACT_APP_API_URL}</code>
      </pre>
      <hr className="border" />
    </div>
  );
}
