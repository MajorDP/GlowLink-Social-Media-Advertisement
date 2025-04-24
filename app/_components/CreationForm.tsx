//@ts-nocheck
//some questions' components and onChange event-handlers are up for adjustments after metadata queries form Instagram/TikTok are implemented.
"use client";

import { useEffect, useState } from "react";
import { IPageInputData } from "../_interfaces/page";
import Error from "./Error";
import { Plus, X } from "lucide-react";

interface ICreationForm {
  onSubmit: (formData: IPageInputData) => void;
}

function CreationForm({ onSubmit }: ICreationForm) {
  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const [formData, setFormData] = useState<IPageInputData>({
    platforms: [],
    bio: {
      displayName: "",
      bio: "",
    },
    featuredContent: [],
    additionalLinks: [{ name: "", link: "" }],
    contactEmail: "",
    donationLink: "",
  });

  const validateStep = (stepIndex: number, data: IPageInputData): boolean => {
    const linkRegExp = /^https:\/\/[^\s/$.?#].[^\s]*$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (stepIndex) {
      case 1: // Profile links
        return (
          data.platforms.length > 0 &&
          data.platforms.every((p) => linkRegExp.test(p.link))
        );
      case 2: // Name & bio
        return data.bio.displayName.trim().length > 0;

      case 4: // Contact email
        return (
          data.contactEmail.trim().length === 0 ||
          emailRegExp.test(data.contactEmail)
        );
      case 5: // Donations link
        return (
          data.donationLink.trim().length === 0 ||
          linkRegExp.test(data.donationLink)
        );
      case 6: // Additional links
        return (
          data.additionalLinks.every(
            (link) => link.name.trim() !== "" && linkRegExp.test(link.link)
          ) ||
          data.additionalLinks.every(
            (link) => link.name.trim() === "" && link.link.trim() === ""
          )
        );
      default:
        return true;
    }
  };

  useEffect(() => {
    setIsAnswered(validateStep(question, formData));
  }, [formData, question]);

  const handlePrev = () => {
    if (question === 2 && formData.platforms.length === 0) {
      setQuestion((prev) => prev - 2);
      return;
    }
    if (question !== 0) {
      setQuestion((prev) => prev - 1);
    }
  };

  async function handleNext() {
    if (!validateStep(question, formData)) {
      setIsAnswered(false);
      return;
    }

    if (question === 0 && formData.platforms.length === 0) {
      setQuestion((prev) => prev + 2);
      return;
    }

    if (question === questions.length - 1) {
      const error = await onSubmit(formData);
      setError(error?.message || null);
    } else {
      setQuestion((prev) => prev + 1);
    }
  }

  const questions = [
    {
      title: "Pick your platforms",
      description: "Where do you post the most?",
      disclaimer: "(Optional)",
      component: (
        <div className="w-full flex flex-row justify-center gap-4">
          {["Instagram", "TikTok"].map((name) => (
            <div
              key={name}
              className={`${
                formData.platforms.some((p) => p.name === name)
                  ? "bg-green-600"
                  : "bg-white/30"
              } rounded-md cursor-pointer transition-colors duration-200`}
              onClick={() =>
                setFormData((prev) => {
                  const alreadySelected = prev.platforms.some(
                    (p) => p.name === name
                  );
                  return {
                    ...prev,
                    platforms: alreadySelected
                      ? prev.platforms.filter((p) => p.name !== name)
                      : [...prev.platforms, { name, link: "" }],
                  };
                })
              }
            >
              <img
                src={
                  name === "Instagram"
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                    : "https://images.icon-icons.com/3041/PNG/512/tiktok_logo_icon_189233.png"
                }
                alt={name}
                className="w-[150px] scale-85"
              />
            </div>
          ))}
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
                onChange={(e) => {
                  const newPlatforms = formData.platforms.map((p) =>
                    p.name === platform.name
                      ? { ...p, link: e.target.value }
                      : p
                  );
                  setFormData((prev) => ({
                    ...prev,
                    platforms: newPlatforms,
                  }));
                }}
                placeholder="https://platform..."
                className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
              />
            </label>
          ))}
        </div>
      ),
    },
    {
      title: "Name & Bio",
      description: "Let’s grab your details!",
      disclaimer: "(Bio is optional)",
      component: (
        <div className="w-full flex flex-col items-center gap-4">
          <input
            value={formData.bio.displayName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                bio: { ...prev.bio, displayName: e.target.value },
              }))
            }
            placeholder="@CoolCreator"
            className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
          />
          <textarea
            placeholder="See my amazing content..."
            className="bg-white/10 resize-none border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
            value={formData.bio.bio}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                bio: { ...prev.bio, bio: e.target.value },
              }))
            }
          />
        </div>
      ),
    },
    {
      title: "Featured Content",
      description: "Want to highlight your best content?",
      disclaimer: "(Optional)",
      component: (
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden bg-green-500 aspect-square cursor-pointer"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  featuredContent: prev.featuredContent.includes(i)
                    ? prev.featuredContent.filter((content) => content !== i)
                    : [...prev.featuredContent, i],
                }))
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
      disclaimer: "(Optional)",
      component: (
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          <input
            value={formData.contactEmail}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                contactEmail: e.target.value,
              }))
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
      disclaimer: "(Optional)",
      component: (
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          <input
            value={formData.donationLink}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                donationLink: e.target.value,
              }))
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
      disclaimer: "(Optional)",
      component: (
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          {formData.additionalLinks.map((link, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex justify-end">
                <button
                  className="bg-white rounded-lg cursor-pointer"
                  onClick={() =>
                    setFormData((prev) => {
                      return {
                        ...prev,
                        additionalLinks: prev.additionalLinks.filter(
                          (link, indx) => index !== indx
                        ),
                      };
                    })
                  }
                >
                  <X className="text-black rounded-lg p-1 w-5 h-5" />
                </button>
              </div>
              <input
                value={link.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    additionalLinks: prev.additionalLinks.map((l, i) =>
                      i === index ? { ...l, name: e.target.value } : l
                    ),
                  }))
                }
                placeholder="Link title"
                className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
              />
              <input
                value={link.link}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    additionalLinks: prev.additionalLinks.map((l, i) =>
                      i === index ? { ...l, link: e.target.value } : l
                    ),
                  }))
                }
                placeholder="https://your-link.com"
                className="bg-white/10 border w-[20rem] border-white/20 p-3 rounded-lg focus:outline-none"
              />
            </div>
          ))}
          {formData.additionalLinks.length <= 2 && (
            <button
              className="bg-white p-1 rounded-lg"
              onClick={() =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    additionalLinks: [
                      ...prev.additionalLinks,
                      { name: "", link: "" },
                    ],
                  };
                })
              }
            >
              <Plus className="w-5 h-5 cursor-pointer text-black" />
            </button>
          )}
        </div>
      ),
    },
  ];

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
        <p className="text-xs text-center text-slate-400">
          {questions[question].disclaimer}
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
          className="bg-white disabled:bg-white/30 text-black px-4 py-1 rounded-lg text-2xl cursor-pointer hover:opacity-85 transition-all duration-200"
          onClick={handleNext}
          disabled={[1, 2, 4, 5, 6].find((q) => q === question) && !isAnswered}
        >
          {question === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
      {error && <Error message={error} />}
    </div>
  );
}

export default CreationForm;
