import { DollarSign } from "lucide-react";
import Link from "next/link";

function TestTemplate() {
  return (
    <div className="absolute top-0 bg-black via-violet-950 to-slate-950 shadow-xl shadow-teal-800">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 bg-gradient-to-b from-red-900 to-black">
        <div className="mt-6 flex flex-col items-center gap-3 w-1/2">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="influencer profile"
            className="rounded-full"
          />
          <h2 className="text-xl font-bold">@CreatorLink</h2>
          <p className="text-slate-200 text-sm text-center">
            Lifestyle + Wellness 🌿 <br /> Sharing the vibe, one post at a time.{" "}
            <br />
            Email for requests: user@gmail.com
          </p>
        </div>
        <div className="mt-6 flex flex-col justify-center gap-3 w-1/2">
          <div className="flex flex-row justify-center gap-4 mt-2 w-full">
            <div className="flex flex-col items-center gap-2">
              <Link
                href="https://www.tiktok.com/en/"
                className="text-center text-sm md:text-base"
              >
                <img
                  src="https://images.icon-icons.com/3041/PNG/512/tiktok_logo_icon_189233.png"
                  alt="TikTok"
                  className="w-[5rem]"
                />
                TikTok
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Link
                href="https://www.instagram.com/"
                className="text-center text-sm md:text-base"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                  alt="TikTok"
                  className="w-[5rem]"
                />
                Instagram
              </Link>
            </div>
          </div>
          <p className="w-full mx-auto bg-white text-black rounded-lg px-4 py-2 text-center hover:opacity-80 transition cursor-pointer">
            🎧 Listen to my latest mix
          </p>
          <p className="w-full mx-auto bg-white text-black rounded-lg px-4 py-2 text-center hover:opacity-80 transition cursor-pointer">
            💼 Shop My Favorites
          </p>
          <p className="w-full mx-auto flex flex-row items-center justify-center px-4 rounded-lg py-2 bg-gradient-to-r from-pink-500 hover:from-pink-400 to-red-500 hover:opacity-90 text-white cursor-pointer">
            <DollarSign className="w-4 h-4 mr-2" /> Send a Tip
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-center text-2xl md:text-4xl mt-8 border-b border-b-slate-800 mx-4 pb-4">
          Featured Posts
        </h2>
        <div className="mt-6 flex flex-row flex-wrap gap-8 justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link
              href="https://instagram.com"
              key={i}
              className="rounded-md w-fit bg-red-200 overflow-hidden aspect-square"
            >
              <img
                src={`https://picsum.photos/200/200?random=${i}`}
                alt="post"
                className="object-cover w-[15rem] h-[15rem] hover:scale-105 duration-200"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestTemplate;
