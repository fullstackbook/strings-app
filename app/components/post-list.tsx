import useSWR from "swr";
import Post from "./post";

function PostList({
  index,
  username,
  showEditBtn,
}: {
  index: number;
  username: string;
  showEditBtn?: boolean;
}) {
  const { data, error, isLoading } = useSWR(
    () => "/api/posts?page=" + index + "&username=" + username
  );

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <ul>
      {data.data.map((post: PostI) => {
        return (
          <li className="my-5" key={post.id}>
            <Post post={post} showEditBtn={showEditBtn} />
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
