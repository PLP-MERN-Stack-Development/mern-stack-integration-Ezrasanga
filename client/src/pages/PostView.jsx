import { useParams } from "react-router-dom";

export default function PostView() {
  const { id } = useParams();

  // Placeholder for fetched post data
  const post = {
    title: "Sample Blog Post",
    content: "This is where the full post content will be displayed.",
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}
