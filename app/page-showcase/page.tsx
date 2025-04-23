import Link from "next/link";
import { getPlatformById } from "../_services/platform";
import { getSession } from "../_services/session";
import Error from "../_components/Error";
import { IPageData } from "../_interfaces/page";

async function page() {
  const session = await getSession();
  const { data, error }: { data: IPageData; error: { message: string } } =
    await getPlatformById(session.id);

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="border border-slate-700 rounded-2xl p-4 bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl shadow-teal-800 h-full">
      <div className="flex flex-col items-center gap-3">
        <Link
          href="/displayName"
          className="bg-white text-black px-6 py-2 rounded-lg text-xl cursor-pointer hover:opacity-85 transition-opacity duration-200"
        >
          Preview
        </Link>
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="influencer profile"
          className="rounded-full"
        />
        <h2 className="text-xl font-bold">@{data.displayName}</h2>
        <p className="text-slate-400 text-sm text-center">
          {data.bio && data.bio}
          <br />
          {data.contactEmail && (
            <span>Email for contact: {data.contactEmail}</span>
          )}
        </p>
        <div className="flex flex-row justify-center gap-4 mt-2 w-full">
          {data.platformLinks.length > 0 &&
            data.platformLinks.map((link, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <p className="text-center text-sm md:text-base">{link.name}</p>
                <Link
                  href={link.link}
                  className="text-center text-sm md:text-base"
                >
                  <img
                    src={
                      link.name === "TikTok"
                        ? "https://images.icon-icons.com/3041/PNG/512/tiktok_logo_icon_189233.png"
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                    }
                    alt="TikTok"
                    className="w-[3rem] md:w-[5rem]"
                  />
                  @user
                </Link>
              </div>
            ))}
        </div>
      </div>
      {data.additionalLinks && (
        <div className="mt-6 flex flex-col gap-3">
          {data.additionalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="w-fit mx-auto bg-white text-black rounded-lg px-4 py-2 text-center hover:opacity-80 transition cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
      <h2 className="text-center text-xl mt-8">Featured Posts</h2>
      {data.featuredContent.length > 0 && (
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
      )}
    </div>
  );
}

export default page;
