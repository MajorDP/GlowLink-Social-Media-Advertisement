//@ts-nocheck
//some questions' components and onChange event-handlers are up for adjustments after metadata queries form Instagram/TikTok are implemented.
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IPageInputData } from "../_interfaces/page";

interface ICreationForm {
  onSubmit: (formData: IPageInputData) => void;
}

function CreationForm({ onSubmit }: ICreationForm) {
  const router = useRouter();
  const [question, setQuestion] = useState(0);
  const [formData, setFormData] = useState<IPageInputData>({
    platforms: [],
    bio: {
      displayName: "",
      bio: "",
    },
    featuredContent: [],
    additionalLinks: [
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
    ],
    contactEmail: "",
    donationLink: "",
  });

  const questions = [
    {
      title: "Pick your platforms",
      description: "Where do you post the most? (Click to select)",
      component: (
        <div className="w-full flex flex-row justify-center gap-4">
          <div
            className={`${
              formData.platforms.some(
                (platform) => platform.name === "Instagram"
              )
                ? "bg-green-600"
                : "bg-white/30"
            } rounded-md cursor-pointer transition-colors duration-200`}
            onClick={() =>
              setFormData((prev) => {
                return {
                  ...prev,
                  platforms: prev.platforms.some(
                    (platform) => platform.name === "Instagram"
                  )
                    ? prev.platforms.filter(
                        (platform) => platform.name !== "Instagram"
                      )
                    : [...prev.platforms, { name: "Instagram", link: "" }],
                };
              })
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
              alt="Instagram"
              className="w-[150px] scale-85"
            />
          </div>
          <div
            className={`${
              formData.platforms.some((platform) => platform.name === "TikTok")
                ? "bg-green-600"
                : "bg-white/30"
            } rounded-md cursor-pointer transition-colors duration-200`}
            onClick={() =>
              setFormData((prev) => {
                return {
                  ...prev,
                  platforms: prev.platforms.some(
                    (platform) => platform.name === "TikTok"
                  )
                    ? prev.platforms.filter(
                        (platform) => platform.name !== "TikTok"
                      )
                    : [...prev.platforms, { name: "TikTok", link: "" }],
                };
              })
            }
          >
            <img
              src="https://images.icon-icons.com/3041/PNG/512/tiktok_logo_icon_189233.png"
              alt="TikTok"
              className="w-[150px] scale-85"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Name & Bio",
      description: "Let’s grab your details!",
      component: (
        <div className="w-full flex flex-col items-center gap-4">
          <p>Available names</p>
          <div className="flex flex-row gap-8">
            <button
              className={`text-black rounded-lg px-4 py-2 text-center hover:opacity-80 ${
                formData.bio.displayName === "@tiktokName"
                  ? "bg-green-700 text-white"
                  : "bg-white"
              } transition cursor-pointer`}
              onClick={() =>
                setFormData((prev) => {
                  return {
                    ...formData,
                    bio: { bio: prev.bio.bio, displayName: "@tiktokName" },
                  };
                })
              }
            >
              @tiktokName
            </button>
            <button
              className={` text-black rounded-lg px-4 py-2 text-center hover:opacity-80 ${
                formData.bio.displayName === "@instagramName"
                  ? "bg-green-700 text-white"
                  : "bg-white"
              } transition cursor-pointer`}
              onClick={() =>
                setFormData((prev) => {
                  return {
                    ...formData,
                    bio: { bio: prev.bio.bio, displayName: "@instagramName" },
                  };
                })
              }
            >
              @instagramName
            </button>
          </div>
          <textarea
            placeholder="Bio"
            className="bg-white/10 resize-none border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
            value={formData.bio.bio}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...formData,
                  bio: {
                    displayName: prev.bio.displayName,
                    bio: e.target.value,
                  },
                };
              })
            }
          />
        </div>
      ),
    },
    {
      title: "Profile links",
      description: "Arrange your social handles so people can follow you.",
      component: (
        <div className="w-full flex flex-col items-center gap-4">
          {formData.platforms.map((platform, index) => (
            <label className="flex flex-col gap-2" key={index}>
              <span>{platform.name}</span>
              <input
                value={platform.link}
                onChange={(e) =>
                  setFormData((prev) => {
                    return {
                      ...prev,
                      platforms: prev.platforms.map((p) =>
                        p.name === platform.name
                          ? { ...p, link: e.target.value }
                          : p
                      ),
                    };
                  })
                }
                placeholder="https://platform..."
                className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
              />
            </label>
          ))}
        </div>
      ),
    },
    {
      title: "Featured Content",
      description: "Want to highlight your best content?",
      component: (
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden bg-green-500 aspect-square cursor-pointer"
              onClick={() =>
                setFormData((prev) => {
                  return formData.featuredContent.includes(i)
                    ? {
                        ...prev,
                        featuredContent: prev.featuredContent.filter(
                          (content) => content !== i
                        ),
                      }
                    : {
                        ...prev,
                        featuredContent: [...prev.featuredContent, i],
                      };
                })
              }
            >
              <img
                src={`https://picsum.photos/200/200?random=${i}`}
                alt="post"
                className={`object-cover w-full h-full duration-200 ${
                  formData.featuredContent.includes(i) ? "scale-90" : ""
                }`}
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Contact Email",
      description: "Have a contact email you'd like to share?",
      component: (
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          <input
            value={formData.contactEmail}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  contactEmail: e.target.value,
                };
              })
            }
            placeholder="example@example..."
            className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
          />
        </div>
      ),
    },
    {
      title: "Accept Donations",
      description:
        "Insert a link to your donation service (PayPal, Ko-fi, etc.)",
      component: (
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          <input
            value={formData.donationLink}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  donationLink: e.target.value,
                };
              })
            }
            placeholder="https://paypal.me/your-name"
            className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
          />
        </div>
      ),
    },
    {
      title: "Additional Links",
      description: "Any other link you'd like to advertise (up to 3)",
      component: (
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          {formData.additionalLinks.map((link, index) => (
            <input
              key={index}
              value={link.link}
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    additionalLinks: prev.additionalLinks.map((l, indx) =>
                      index === indx ? { ...l, link: e.target.value } : l
                    ),
                  };
                })
              }
              placeholder="https://your-link.com"
              className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
            />
          ))}
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (question === questions.length - 1) {
      console.log("end of quiz");
      onSubmit(formData);
      router.push("/page-showcase");
    } else {
      setQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (question === 0) {
      console.log("start of quiz");
    } else {
      setQuestion((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 gap-8">
      <div className="w-full flex flex-col items-center gap-4 mt-4">
        <p className="text-gray-400">
          {question + 1} / {questions.length}
        </p>
        <h3 className="text-xl md:text-4xl sm:text-5xl font-bold text-center">
          {questions[question].title}
        </h3>

        <p className="text-sm text-center text-slate-400">
          {questions[question].description}
        </p>
        {questions[question].component}
      </div>
      <div className="flex flex-row gap-8">
        <button
          className=" disabled:hidden border border-slate-400 bg-black text-white px-4 py-1 rounded-lg text-2xl cursor-pointer hover:opacity-85 transition-opacity duration-200"
          onClick={handlePrev}
          disabled={question === 0}
        >
          Prev
        </button>

        <button
          className="bg-white text-black px-4 py-1 rounded-lg text-2xl cursor-pointer hover:opacity-85 transition-opacity duration-200"
          onClick={handleNext}
        >
          {question === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default CreationForm;
