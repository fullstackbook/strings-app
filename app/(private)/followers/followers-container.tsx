import { useState } from "react";
import FollowersList from "./followers-list";

function FollowersContainer() {
  const [cnt, setCnt] = useState(1);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<FollowersList index={i} />);
  }

  return (
    <div>
      {pages}
      <div className="flex justify-center w-full">
        <button
          onClick={() => setCnt(cnt + 1)}
          className="dark:bg-slate-900 bg-slate-400 p-2 rounded-lg"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default FollowersContainer;
