import React, { useState, useEffect } from "react";
import api from "../api/axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/posts");
      // The backend returns an array, not an object with 'posts'
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li
              key={post._id}
              className="border p-3 rounded-md bg-gray-50 flex justify-between items-center"
            >
              <span>{post.title}</span>
              <button
                onClick={() => deletePost(post._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
