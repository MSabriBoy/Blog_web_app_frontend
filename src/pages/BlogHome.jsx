import { useEffect, useState } from "react";
import toast from "react-hot-toast";
function BlogHome() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    //GET all posts
    const getPosts = async () => {
        try {
            setLoading(true);

            const res = await fetch("http://localhost:5000/posts");

            if (!res.ok) {
                throw new Error("Server error");
            }

            const data = await res.json();
            setPosts(data);
            setError("");
        } catch (err) {
            setError("Backend is offline or something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    //CREATE post
    const addPost = async () => {
        if (!title.trim() || !content.trim()) {
            toast.error("Title and Content required!", {
                style: {
                    background: "#1f2937",
                    color: "#fff"
                }
            });
            return;
        }
        await fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content })
        });

        toast.success("Post added successfully 🚀", {
            style: {
                background: "#1f2937",
                color: "#fff"
            }
        });

        setTitle("");
        setContent("");
        getPosts();
    };

    //DELETE post
    const deletePost = async (id) => {
        await fetch(`http://localhost:5000/posts/${id}`, {
            method: "DELETE"
        });

        toast.success("Post deleted 🗑️", {
            style: {
                background: "#1f2937",
                color: "#fff"
            }
        });

        getPosts();
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

            {error && (
                <div className="max-w-3xl mx-auto mb-6 bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-center">
                    {error}
                </div>
            )}

            <div className="max-w-3xl mx-auto">

                <h1 className="text-3xl font-bold mb-8 text-center">
                    📝 Blog Dashboard
                </h1>

                {/* FORM CARD */}

                <div className="bg-gray-900 p-6 rounded-xl shadow-lg mb-10 border border-gray-800 relative">
                    {loading && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-50">

                            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                            <p className="mt-3 text-gray-300 text-sm">
                                Processing...
                            </p>

                        </div>
                    )}
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
                        className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
                    >
                        ➕ Add Post
                    </button>
                </div>

                {/* POSTS LIST */}
                <div className="space-y-6">

                    {posts.length === 0 && (
                        <p className="text-center text-gray-400">
                            No posts yet. Create one 🚀
                        </p>
                    )}
                    {!error &&
                        posts.map((post) => (
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