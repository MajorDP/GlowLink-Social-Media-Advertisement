import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { getSession } from "../_services/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function Navigation() {
  const session = await getSession();

  const handleLogout = async () => {
    "use server";
    const cookiesStore = await cookies();
    cookiesStore.delete("session");
    redirect("/auth");
  };

  return (
    <>
      <HamburgerMenu session={session} handleLogout={handleLogout} />
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
          {session ? (
            <>
              <Link
                href="/page-showcase"
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
              <form action={handleLogout}>
                <button
                  className="hover:text-gray-50 transition-colors duration-100"
                  type="submit"
                >
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/auth"
              className="hover:text-gray-50 transition-colors duration-100"
            >
              Sign Up/In
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Navigation;
