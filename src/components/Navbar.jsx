import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white"
      aria-label="Main"
    >
      <div className="mx-auto grid h-14 w-full min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="min-w-0 justify-self-start text-base font-bold tracking-tight text-slate-900 sm:text-lg"
        >
          BeautyHub
        </Link>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <Link
            to="/"
            className="whitespace-nowrap text-xs font-medium text-slate-600 transition hover:text-slate-900 sm:text-sm"
          >
            Home
          </Link>
          <Link
            to="/checkout"
            className="whitespace-nowrap text-xs font-medium text-slate-600 transition hover:text-slate-900 sm:text-sm"
          >
            Cart
          </Link>
        </div>

        <div className="flex min-w-0 items-center justify-end gap-1.5 sm:gap-3">
          <Link
            to="/auth"
            className="inline-flex items-center justify-center rounded-md bg-slate-700 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 sm:px-4 sm:py-2 sm:text-sm"
          >
            Login
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:px-4 sm:py-2 sm:text-sm"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
