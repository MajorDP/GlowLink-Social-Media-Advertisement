import { Check, User } from "lucide-react";
import ExamplePost from "./_components/ExamplePost";
import Features from "./_components/Features";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div className="h-full mt-12 lg:mt-24 flex flex-col gap-36">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0 backdrop-blur-2xl">
        <div className="flex flex-col gap-4 w-full md:w-[30rem]">
          <p className="bg-slate-800 px-2 py-1 rounded-lg w-fit hidden lg:flex items-center gap-1">
            <Check className="w-5 h-5" /> Build without code!
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-center md:text-start">
            <p>Your Content</p> <p>Deserves a</p>{" "}
            <p className="bg-gradient-to-br from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Beautiful Home
            </p>
          </h1>
          <p className="w-fit text-sm md:text-lg text-center md:text-start text-slate-400">
            Create a stunning landing page for your Instagram and TikTok content
            in minutes. No coding required.
          </p>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-lg text-2xl cursor-pointer hover:opacity-85 transition-opacity duration-200">
              Get Started Free
            </button>
            <button className="border border-slate-400 bg-black text-white px-6 py-2 rounded-lg text-2xl cursor-pointer hover:opacity-85 transition-opacity duration-200">
              View Examples
            </button>
          </div>
          <p className="flex flex-row justify-center md:justify-start gap-1 text-sm text-slate-300">
            <User className="w-5 h-5" /> Used by over 10,000 people
          </p>
        </div>
        <ExamplePost />
      </div>
      <Features />
      <Testimonials />
    </div>
  );
}
