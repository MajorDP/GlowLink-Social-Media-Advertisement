import { ITemplate } from "@/app/_interfaces/page";
import { DollarSign, Instagram } from "lucide-react";
import Link from "next/link";

function TemplateB({ data, isPublic }: ITemplate) {
  return (
    <div
      className={`${
        isPublic && "absolute top-0"
      } bg-black shadow-xl shadow-teal-800 flex flex-col`}
    >
      {!isPublic && (
        <Link
          href={`/${data.displayName}`}
          className="h-12 flex items-center justify-center text-center hover:text-blue-400 transition-color duration-200"
        >
          Preview in Public Mode
        </Link>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-12 xl:px-28 bg-black">
        <div className="mt-6 flex flex-col items-center gap-4 w-1/2">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="influencer profile"
            className="rounded-full"
          />
          <h2 className="text-4xl font-bold text-center">{data.displayName}</h2>
          <p className="text-slate-300 text-center">{data.bio && data.bio}</p>
          {data.contactEmail && (
            <p className="text-center text-slate-300">
              Contact Email: {data.contactEmail}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center gap-3 w-full xl:w-1/2">
          <div className="flex flex-row justify-center gap-8 w-full">
            {data.platformLinks.length > 0 &&
              data.platformLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 font-semibold"
                >
                  <p>{link.name}</p>
                  <Link
                    href={link.link}
                    className="text-center flex flex-row items-center gap-2 border border-slate-600 bg-gradient-to-br from-red-400 hover:from-red-500 to-violet-500 text-black px-4 py-2 rounded-lg text-sm md:text-base"
                  >
                    <Instagram />
                    @user
                  </Link>
                </div>
              ))}
          </div>
          {data.additionalLinks && (
            <div className="mt-6 flex flex-col gap-3">
              {data.additionalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="w-full xl:w-1/2 mx-auto bg-white text-black rounded-lg px-4 py-2 text-center hover:opacity-80 transition cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
          {data.donationsLink && (
            <Link
              href={data.donationsLink}
              className="w-full xl:w-1/2 mx-auto flex flex-row items-center justify-center px-4 rounded-lg py-2 bg-gradient-to-r from-pink-500 hover:from-pink-400 to-red-500 hover:opacity-90 text-white cursor-pointer"
            >
              <DollarSign className="w-4 h-4 mr-2" /> Send a Tip
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col px-12 xl:px-24 md:mt-8">
        <h2 className="text-start text-2xl md:text-4xl border-b border-b-slate-800 mx-4 pb-4">
          Featured Work
        </h2>
        <div className="mt-4 md:mt-6 flex flex-row flex-wrap gap-8 justify-center">
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

export default TemplateB;
