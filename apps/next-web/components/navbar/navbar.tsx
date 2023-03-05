import Link from "next/link";

export default function Navbar() {
  const title = "FS";
  const pages = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "https://github.com/skonky",
      target: "_blank",
      name: "GitHub",
    },
    {
      url: "/blog",
      name: "Blog",
    },
  ];
  return (
    <div className="navbar sticky top-0 bg-base-100 z-10">
      <div className="navbar-start">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            {pages.map((page) => (
              <li key={page.url}>
                <Link target={page.target || "_self"} href={page.url}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {title && (
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            {title}
          </Link>
        )}
      </div>
    </div>
  );
}
