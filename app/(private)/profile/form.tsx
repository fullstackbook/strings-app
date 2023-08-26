import { FormEvent, useState } from "react";
import { useSWRConfig } from "swr";

function Form() {
  const { mutate } = useSWRConfig();
  const [post, setPost] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ content: post }),
    });

    if (res.ok) {
      setPost("");
      mutate((key) => typeof key === "string" && key.startsWith("/api/posts"));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="bg-white text-black p-2 rounded-lg w-full my-2"
        placeholder="What is happening?"
        onChange={(e) => setPost(e.target.value)}
        value={post}
      />
      <button
        type="submit"
        className="dark:bg-slate-900 bg-slate-400 p-2 rounded-lg"
      >
        Post
      </button>
    </form>
  );
}

export default Form;
