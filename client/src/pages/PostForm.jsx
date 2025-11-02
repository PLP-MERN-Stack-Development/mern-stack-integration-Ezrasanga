import { useState } from "react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Post:", { title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create / Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full border rounded p-2 h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
