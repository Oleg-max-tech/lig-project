"use client";

import Image from "next/image";
import hero from "@/assets/hero.svg";
import classNames from "classnames";

export const HomePage = () => {
  return (
    <div className="mt-20 relative w-full h-200 sm:h-175 xs:h-150">
      <Image src={hero} alt="hero" fill className="object-cover" priority />
      <div
        className={classNames(
          "absolute left-4 top-1/2 sm:top-1/2 xs:top-0.15 -translate-y-1/2 sm:-translate-y-1/2 xs:-translate-y-0.25 max-w-0.9 flex flex-col gap-2"
        )}
      >
        <div className="flex items-end gap-2 flex-wrap">
          <h1
            className={classNames(
              "text-12 sm:text-20 md:text-24 lg:text-32 font-bold text-red-600 leading-tight",
              "xs:text-4xl"
            )}
          >
            ILG
          </h1>
          <p
            className={classNames(
              "text-3.5 sm:text-base md:text-lg lg:text-5 text-white ml-2 sm:ml-4 mb-2 sm:mb-4",
              "xs:text-lg"
            )}
          >
            Exterior siding
          </p>
        </div>
        <h2
          className={classNames(
            "text-3xl sm:text-5xl md:text-20 lg:text-132 text-white font-bold",
            "xs:text-4xl"
          )}
        >
          CONSTRUCTION
        </h2>
      </div>

      <div
        className={classNames(
          "absolute bottom-0 right-0 bg-black/90 text-white p-4 sm:p-6 w-full sm:w-125 rounded-tl-xl",
          "text-3.5 sm:text-xs md:text-sm lg:text-base leading-relaxed"
        )}
      >
        Our primary objective has always been to transform neighborhoods into
        visually appealing and harmonious spaces, focusing on enhancing the
        aesthetic value of each building we work on, one project at a time.
      </div>
    </div>
  );
};
