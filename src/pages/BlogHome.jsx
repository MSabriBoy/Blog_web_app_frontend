    import { useEffect, useState } from "react";

function BlogHome() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 🔹 GET all posts
  const getPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // 🔹 CREATE post
  const addPost = async () => {
    await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content })
    });

    setTitle("");
    setContent("");
    getPosts(); // refresh
  };

  // 🔹 DELETE post
  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE"
    });

    getPosts();
  };

return (
  <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

    <div className="max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-8 text-center">
        📝 Blog Dashboard
      </h1>

      {/* FORM CARD */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg mb-10 border border-gray-800">
        <h2 className="text-xl font-semibold mb-4">Create Post</h2>

        <input
          className="w-full mb-3 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write content..."
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={addPost}
          className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-semibold"
        >
          ➕ Add Post
        </button>
      </div>

      {/* POSTS LIST */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {post.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {post.content}
            </p>

            <button
              onClick={() => deletePost(post._id)}
              className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-sm"
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}

export default BlogHome;