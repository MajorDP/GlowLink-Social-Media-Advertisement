"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface IHamburgerMenu {
  session: {
    id: string;
    role: string;
    username: string;
    iat: number;
    exp: number;
  };
  handleLogout: () => void;
}
export default function HamburgerMenu({
  session,
  handleLogout,
}: IHamburgerMenu) {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="z-50 p-2 fixed top-4 left-4 bg-black text-white rounded-md"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 bg-opacity-50 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">CreatorLink</h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="hover:text-slate-300"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            {session && (
              <>
                <li>
                  <Link
                    href="/user"
                    className="hover:text-slate-300"
                    onClick={() => setOpen(false)}
                  >
                    Your page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/create"
                    className="hover:text-slate-300"
                    onClick={() => setOpen(false)}
                  >
                    Create
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                href="/features"
                className="hover:text-slate-300"
                onClick={() => setOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-slate-300"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/examples"
                className="hover:text-slate-300"
                onClick={() => setOpen(false)}
              >
                Examples
              </Link>
            </li>

            {session ? (
              <li>
                <button
                  className="hover:text-slate-300"
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                >
                  Sign out
                </button>
              </li>
            ) : (
              <li>
                <Link
                  className="hover:text-slate-300"
                  href="/auth"
                  onClick={() => setOpen(false)}
                >
                  Sign Up/In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
