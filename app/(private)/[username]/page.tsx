"use client";

import PostContainer from "@/app/components/post-container";
import UserPageHeader from "./user-page-header";

export default function UserPage({ params }: { params: { username: string } }) {
  return (
    <div>
      <UserPageHeader username={params.username} />
      <PostContainer username={params.username} />
    </div>
  );
}
