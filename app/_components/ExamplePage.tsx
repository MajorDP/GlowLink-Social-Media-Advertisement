import { DollarSign } from "lucide-react";

function ExamplePage() {
  return (
    <div className="border border-slate-700 rounded-2xl p-4 bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl shadow-teal-800">
      <div className="flex flex-col items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="influencer profile"
          className="rounded-full"
        />
        <h2 className="text-xl font-bold">@cool_creator</h2>
        <p className="text-slate-400 text-sm text-center">
          Lifestyle + Wellness 🌿 <br /> Sharing the vibe, one post at a time.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md overflow-hidden bg-slate-700 aspect-square"
          >
            <img
              src={`https://picsum.photos/200/200?random=${i}`}
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <p className="bg-white text-black rounded-lg px-4 py-2 text-center hover:opacity-80 transition cursor-pointer">
          🎧 Listen to my latest mix
        </p>
        <p className="bg-white text-black rounded-lg px-4 py-2 text-center hover:opacity-80 transition cursor-pointer">
          💼 Shop My Favorites
        </p>
      </div>
      <div className="mt-6 text-center border-t border-slate-600 pt-4">
        <p className="text-slate-300 mb-2">Enjoying the content?</p>
        <button className="w-full flex flex-row items-center justify-center py-2 bg-gradient-to-r from-pink-500 hover:from-pink-400 to-red-500 hover:opacity-90 text-white cursor-pointer">
          <DollarSign className="w-4 h-4 mr-2" /> Send a Tip
        </button>
      </div>
    </div>
  );
}

export default ExamplePage;
