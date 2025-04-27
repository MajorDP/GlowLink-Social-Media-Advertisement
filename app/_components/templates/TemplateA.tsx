import { ITemplate } from "@/app/_interfaces/page";
import { DollarSign } from "lucide-react";
import Link from "next/link";

function TemplateA({ data, isPublic }: ITemplate) {
  return (
    <div
      className={`${
        isPublic && "absolute top-0"
      } bg-black via-violet-950 to-slate-950 shadow-xl shadow-teal-800 flex flex-col w-full h-full`}
    >
      {!isPublic && (
        <Link
          href={`/${data.displayName}`}
          className="h-12 flex items-center justify-center text-center hover:text-blue-400 transition-colors duration-200"
        >
          Preview in Public Mode
        </Link>
      )}
      <div className="flex flex-col items-center gap-3">
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
      {data.donationsLink && (
        <Link
          href={data.donationsLink}
          className="mt-4 w-fit mx-auto flex flex-row items-center justify-center px-4 rounded-lg py-2 bg-gradient-to-r from-pink-500 hover:from-pink-400 to-red-500 hover:opacity-90 text-white cursor-pointer"
        >
          <DollarSign className="w-4 h-4 mr-2" /> Send a Tip
        </Link>
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

export default TemplateA;
