import { ITemplate } from "@/app/_interfaces/page";
import { DollarSign, Instagram } from "lucide-react";
import Link from "next/link";

function TemplateC({ data, isPublic }: ITemplate) {
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
      <div className="flex flex-col items-center justify-center gap-8 py-12 my-12 mx-12 xl:mx-40 border border-slate-700 rounded-xl bg-white/10 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full px-12">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="influencer profile"
            className="rounded-lg"
          />
          <div className="flex flex-col text-start gap-4 md:gap-2">
            <h2 className="text-4xl font-bold text-center md:text-start">
              {data.displayName}
            </h2>
            <p className="text-slate-300 w-full break-after-all text-center md:text-start">
              {data.bio && data.bio}
            </p>
            {data.contactEmail && (
              <p className="text-slate-300 text-center md:text-start">
                Contact Email: {data.contactEmail}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center md:px-12 gap-4 w-full">
          {data.additionalLinks && (
            <div className="flex flex-row gap-3">
              {data.additionalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="w-full bg-slate-700/50 backdrop-blur-2xl text-white rounded-lg px-4 py-2 text-center hover:scale-105 duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
          {data.donationsLink && (
            <Link
              href={data.donationsLink}
              className="flex flex-row items-center justify-center px-4 rounded-lg py-2 bg-pink-500 hover:scale-105 duration-200 text-white cursor-pointer"
            >
              <DollarSign className="w-4 h-4 mr-2" /> Send a Tip
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row px-24 xl:px-40 gap-12 md:gap-4">
        <div className="flex flex-col">
          <h2 className="text-start text-xl md:text-2xl mx-4 font-bold">
            Latest Content
          </h2>
          <div className="mt-4 md:mt-6 flex flex-row flex-wrap gap-8 w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <Link
                href="https://instagram.com"
                key={i}
                className="rounded-md overflow-hidden aspect-square"
              >
                <img
                  src={`https://picsum.photos/200/200?random=${i}`}
                  alt="post"
                  className="object-cover w-full h-full hover:scale-105 duration-200"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="md:w-1/4 w-full">
          <h2 className="text-start text-xl md:text-2xl mx-4 md:mx-0 font-bold">
            Follow me
          </h2>
          <div className="mt-4 md:mt-6 flex flex-col justify-start items-start gap-4 w-full">
            {data.platformLinks.length > 0 &&
              data.platformLinks.map((link, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col gap-1 font-semibold"
                >
                  <Link
                    href={link.link}
                    className="text-center flex flex-row justify-center md:justify-baseline items-center gap-2 border border-red-600 hover:bg-slate-900 duration-200 text-white px-4 py-2 rounded-lg text-sm md:text-base"
                  >
                    <Instagram />
                    {link.name}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateC;
