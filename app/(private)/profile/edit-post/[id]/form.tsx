import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useSWRConfig } from "swr";

function Form({ post }: { post: PostI }) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [content, setContent] = useState(post.content);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/posts/" + post.id, {
      method: "PATCH",
      body: JSON.stringify({ content: content }),
    });
    if (res.ok) {
      setContent("");
      router.push("/profile");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="bg-gray-700 p-2 rounded-lg w-full my-2"
        placeholder="What is happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button type="submit" className="bg-slate-900 p-2 rounded-lg">
        Update Post
      </button>
    </form>
  );
}

export default Form;
