"use client";

import { useEffect, useState } from "react";

interface IDisappearingMessage {
  message: string;
  coloredMessage?: string;
  time: number;
  description?: string;
}

function DisappearingMessage({
  message,
  coloredMessage,
  time,
  description,
}: IDisappearingMessage) {
  const [animateIn, setAnimateIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const inTimer = setTimeout(() => {
      setAnimateIn(true);
    }, 50);

    const outTimer = setTimeout(() => {
      setFadeOut(true);
    }, time);

    return () => {
      clearTimeout(inTimer);
      clearTimeout(outTimer);
    };
  }, [time]);

  return (
    <div
      className={`
        overflow-hidden transition-all duration-700 ease-in-out
        ${
          fadeOut
            ? "max-h-0 opacity-0 -translate-y-10"
            : "max-h-[300px] opacity-100 translate-y-0"
        }
        ${!animateIn ? "opacity-0 translate-y-5" : ""}
      `}
    >
      <h1 className="text-2xl md:text-4xl sm:text-5xl font-bold text-center">
        {message}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          {coloredMessage}
        </span>
      </h1>
      {description && (
        <p className="text-sm md:text-lg font-normal text-center text-slate-400 mt-2">
          {description}
        </p>
      )}
    </div>
  );
}

export default DisappearingMessage;
