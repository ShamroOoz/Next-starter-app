import Link from "next/Link";

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-white px-8 pt-2 shadow-md">
        <div className="-mb-px flex justify-center">
          <Link href="/">
            <a className="nav-bar">Home</a>
          </Link>
          <Link href="/Posts">
            <a className="nav-bar">Posts</a>
          </Link>
          <Link href="/about">
            <a className="nav-bar">About</a>
          </Link>
          <Link href="/contact">
            <a className="nav-bar">Contact</a>
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
}
