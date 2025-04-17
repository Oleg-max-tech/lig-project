"use client";

import Image from "next/image";
import image from "@/assets/image.svg";

import classNames from "classnames";

export const FirstPage = () => {
  return (
    <div className="mt-20 relative w-full h-200 sm:h-screenTablet xs:h-screenMobile">
      <Image src={image} alt="etttb" fill className="object-cover" priority />
      <div
        className={classNames(
          "absolute left-4 top-1/2 sm:top-1/2 xs:top-[15%] -translate-y-1/2 sm:-translate-y-1/2 xs:-translate-y-[25%] max-w-[90%] flex flex-col gap-2"
        )}
      >
        <div className="flex items-end gap-2 flex-wrap">
          <h1
            className={classNames(
              "text-heroSmall sm:text-heroMedium md:text-heroLarge lg:text-heroHuge font-bold text-red-600 leading-tight",
              "xs:text-4xl"
            )}
          >
            ILG
          </h1>
          <p
            className={classNames(
              "text-paragraph sm:text-base md:text-lg lg:text-subtitle text-white ml-2 sm:ml-4 mb-2 sm:mb-4",
              "xs:text-lg"
            )}
          >
            Exterior siding
          </p>
        </div>
        <h2
          className={classNames(
            "text-3xl sm:text-5xl md:text-heroMedium lg:text-heroHuge text-white font-bold",
            "xs:text-4xl"
          )}
        >
          CONSTRUCTION
        </h2>
      </div>

      <div
        className={classNames(
          "absolute bottom-0 right-0 bg-black/90 text-white p-4 sm:p-6 w-full sm:w-infoBox rounded-tl-xl",
          "text-paragraph sm:text-xs md:text-sm lg:text-base leading-relaxed"
        )}
      >
        Our primary objective has always been to transform neighborhoods into
        visually appealing and harmonious spaces, focusing on enhancing the
        aesthetic value of each building we work on, one project at a time.
      </div>
    </div>
  );
};
