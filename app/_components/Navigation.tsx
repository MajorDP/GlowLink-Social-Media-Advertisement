import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

async function Navigation() {
  return (
    <>
      <HamburgerMenu />
      <header className="hidden md:flex flex-row justify-between border-b border-slate-700 h-16 px-4">
        <div className="flex flex-row gap-12 items-center">
          <Link href="/" className="font-black text-3xl">
            CreatorLink
          </Link>
          <div className="flex flex-row gap-8 text-xl text-gray-300">
            <Link
              href="/features"
              className="hover:text-gray-50 transition-colors duration-100"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="hover:text-gray-50 transition-colors duration-100"
            >
              Pricing
            </Link>
            <Link
              href="/examples"
              className="hover:text-gray-50 transition-colors duration-100"
            >
              Examples
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 text-xl text-gray-300">
          <Link
            href="/user"
            className="hover:text-gray-50 transition-colors duration-100"
          >
            Your page
          </Link>
          <Link
            href="/create"
            className="hover:text-gray-50 transition-colors duration-100"
          >
            Create
          </Link>
          <Link
            href="/auth"
            className="hover:text-gray-50 transition-colors duration-100"
          >
            Sign Up/In
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navigation;
