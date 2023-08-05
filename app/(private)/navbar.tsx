import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex max-w-md w-full p-5 bg-slate-800 rounded-lg my-2">
      <ul className="flex flex-row justify-around w-full">
        <li>
          <Link href="/feed">Feed</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/following">Following</Link>
        </li>
        <li>
          <Link href="/followers">Followers</Link>
        </li>
      </ul>
    </nav>
  );
}
