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
    <div style={{ padding: "20px" }}>
      <h1>Blog App</h1>

      {/* FORM */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br /><br />

      <button onClick={addPost}>Add Post</button>

      <hr />

      {/* POSTS */}
      {posts.map((post) => (
        <div key={post._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogHome;