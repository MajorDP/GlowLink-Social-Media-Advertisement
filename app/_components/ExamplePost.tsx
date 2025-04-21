function ExamplePost() {
  return (
    <div className="border w-fit md:w-lg border-slate-700 bg-black text-white max-w-xl rounded-lg p-1 shadow-xl shadow-teal-800">
      <img
        alt="UserImg"
        src="https://www.firstbeat.com/wp-content/uploads/2020/04/header-blog-8.4.20.png"
        className="w-fit h-fit rounded-t-lg"
      />
      <div className="flex flex-row gap-2 p-4 items-center">
        <div className="max-w-[50px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFem0b3QKwZNYgZ3eCClFlnIlIn5V1nDJjw&s"
            alt="aa"
            className="w-fit rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">@creator</p>
          <p className="text-slate-400">Content Creator</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-4">
        <p className="font-semibold">
          15.2k <span className="text-slate-400 font-normal">Followers</span>
        </p>
        <button className="border border-slate-400 bg-white text-black px-4 py-1 rounded-lg ">
          Follow
        </button>
      </div>
    </div>
  );
}

export default ExamplePost;
