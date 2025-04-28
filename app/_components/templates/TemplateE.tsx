import { ITemplate } from "@/app/_interfaces/page";
import { DollarSign, Instagram } from "lucide-react";
import Link from "next/link";

function TemplateC({ data, isPublic }: ITemplate) {
  return (
    <div
      className={`${
        isPublic && "absolute top-0 py-12"
      } w-full py-0 bg-gradient-to-r from-violet-950 via-purple-950 to-red-950 shadow-xl shadow-teal-800 flex flex-col gap-8`}
    >
      {!isPublic && (
        <Link
          href={`/${data.displayName}`}
          className="h-12 flex items-center justify-center text-center bg-black/50 text-white hover:text-white/50 transition-color duration-200"
        >
          Preview in Public Mode
        </Link>
      )}
      <div className="w-full md:max-w-3xl m-auto py-12 md:px-44 flex flex-col items-center justify-center gap-8 rounded-xl bg-slate-950/70 shadow-xl backdrop-blur-md">
        <div className="flex flex-col items-center gap-4 w-full px-12">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="influencer profile"
            className="rounded-full ring-2 ring-violet-950"
          />
          <div className="flex flex-col gap-8 text-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold bg-gradient-to-br from-violet-400 to-pink-500 bg-clip-text text-transparent">
                {data.displayName}
              </h2>
              <p className="text-2xl">Content Creator</p>
            </div>
            <div className="text-lg flex flex-col text-gray-400">
              <p className="w-full break-after-all">{data.bio && data.bio}</p>
              {data.contactEmail && <p>Contact Email: {data.contactEmail}</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center md:px-12 gap-4 w-full md:w-full">
          <div className="w-full">
            <div className="flex flex-row gap-8 justify-center">
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold bg-gradient-to-br from-violet-400 to-pink-500 bg-clip-text text-transparent">
                  14K
                </p>
                <p className="text-gray-200">Instagram</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold bg-gradient-to-br from-violet-400 to-pink-500 bg-clip-text text-transparent">
                  16K
                </p>
                <p className="text-gray-200">TikTok</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-2xl">
          {data.platformLinks.length > 0 &&
            data.platformLinks.map((link, index) => (
              <div key={index} className="w-full flex flex-col gap-1">
                <Link
                  href={link.link}
                  className="w-full text-center flex flex-row justify-center md:justify-baseline items-center gap-2 text-white bg-black/50 hover:scale-105 duration-200 px-4 py-2 rounded-lg text-sm md:text-base"
                >
                  <Instagram />
                  {link.name}
                </Link>
              </div>
            ))}
        </div>
        {data.additionalLinks && (
          <div className="flex flex-col items-center justify-center gap-4 w-full md:w-2xl">
            {data.additionalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="w-full text-center flex flex-row justify-center md:justify-baseline items-center gap-2 text-white bg-black/50 hover:scale-105 duration-200 px-4 py-2 rounded-lg text-sm md:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
        {data.donationsLink && (
          <Link
            href={data.donationsLink}
            className="w-full md:w-2xl mx-auto flex flex-row items-center justify-center px-4 py-2 rounded-lg bg-pink-500 hover:scale-105 duration-200 text-white cursor-pointer"
          >
            <DollarSign className="w-4 h-4 mr-2" /> Send a Tip
          </Link>
        )}
      </div>

      <div className="flex flex-col md:flex-row px-12 md:px-24 xl:px-40 gap-12 md:gap-4">
        <div className="mt-4 md:mt-6 flex flex-col gap-8 w-full md:w-3xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-black/80 overflow-hidden flex flex-col rounded-md"
            >
              <Link
                href="https://instagram.com"
                className="w-full h-fit md:h-[30rem] rounded-t-md overflow-hidden aspect-square"
              >
                <img
                  src={`https://picsum.photos/200/200?random=${i}`}
                  alt="post"
                  className="object-contain w-full h-fit hover:scale-105 duration-200"
                />
              </Link>
              <div className="h-16 px-8 py-4 w-full flex flex-row justify-center md:justify-between">
                <p className="font-semibold cursor-default">154K views</p>
                <Link
                  href="https://instagram.com"
                  className="hidden md:block hover:scale-105 duration-200 px-2 py-1 rounded-md"
                >
                  Open in instagram
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateC;
