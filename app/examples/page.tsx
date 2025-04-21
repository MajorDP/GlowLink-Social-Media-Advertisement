import Link from "next/link";
import ExamplePage from "../_components/ExamplePage";

function page() {
  return (
    <div className="min-h-screen py-24 px-4 flex flex-col md:flex-row justify-around">
      <div className="text-center w-full md:w-1/2 mx-auto md:mx-0 ">
        <div className="text-center w-full px-4 mt-16 mb-12">
          <p className="text-sm uppercase tracking-wide text-teal-400 font-semibold mb-2">
            See it in action
          </p>
          <h1 className="text-2xl md:text-4xl sm:text-5xl font-bold mb-4">
            What if your content looked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              this good
            </span>
            ?
          </h1>
          <p className="text-slate-400 text-sm md:text-lg">
            Turn followers into fans with a beautiful, high-converting page.
            Showcase your brand, link everything you love, and monetize—all in
            one link.
          </p>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Ready to make yours?
            </h2>
            <p className="text-sm text-slate-400 mb-4">
              It takes less than 10 minutes.
            </p>
            <Link
              href="/auth"
              className="bg-white text-black px-6 py-3 rounded-lg md:text-lg hover:opacity-90"
            >
              Create Your Page
            </Link>
          </div>
        </div>
      </div>

      <ExamplePage />
    </div>
  );
}

export default page;
