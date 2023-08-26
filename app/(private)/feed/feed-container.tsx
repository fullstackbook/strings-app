import { useState } from "react";
import FeedList from "./feed-list";

function FeedContainer() {
  const [cnt, setCnt] = useState(1);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<FeedList index={i} key={i} />);
  }

  return (
    <div>
      {pages}
      <div className="flex justify-center">
        <button
          className="dark:bg-slate-900 bg-slate-400 p-2 rounded-lg"
          onClick={() => setCnt(cnt + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default FeedContainer;
