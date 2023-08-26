import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex max-w-md w-full p-5 dark:bg-slate-800 bg-slate-300 rounded-lg my-2">
      <ul className="flex flex-row justify-around w-full">
        <li>
          <Link
            href="/feed"
            className={
              pathname.startsWith("/feed")
                ? "dark:text-green-400 text-green-800"
                : ""
            }
          >
            Feed
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={
              pathname.startsWith("/profile")
                ? "dark:text-green-400 text-green-800"
                : ""
            }
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/following"
            className={
              pathname.startsWith("/following")
                ? "dark:text-green-400 text-green-800"
                : ""
            }
          >
            Following
          </Link>
        </li>
        <li>
          <Link
            href="/followers"
            className={
              pathname.startsWith("/followers")
                ? "dark:text-green-400 text-green-800"
                : ""
            }
          >
            Followers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
