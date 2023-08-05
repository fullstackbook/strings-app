import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex max-w-md w-full p-5 bg-slate-800 rounded-lg my-2">
      <ul className="flex flex-row justify-around w-full">
        <li>
          <Link
            href="/feed"
            className={pathname.startsWith("/feed") ? "text-green-400" : ""}
          >
            Feed
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={pathname.startsWith("/profile") ? "text-green-400" : ""}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/following"
            className={
              pathname.startsWith("/following") ? "text-green-400" : ""
            }
          >
            Following
          </Link>
        </li>
        <li>
          <Link
            href="/followers"
            className={
              pathname.startsWith("/followers") ? "text-green-400" : ""
            }
          >
            Followers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
