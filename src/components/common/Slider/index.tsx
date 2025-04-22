"use client";

import { useRef } from "react";
import { Slider } from "./Slider";
import cn from "classnames";

const arrowBase =
  "z-20 text-white bg-white/10 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center";
const prevButtonClassNAme = cn(
  arrowBase,
  "absolute left-0 top-1/2 -translate-y-1/2"
);
const nextButtonClassName = cn(
  arrowBase,
  "absolute right-0 top-1/2 -translate-y-1/2"
);

export const GallerySlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative bg-black py-12 px-4 max-w-300 mx-auto">
      <h1 className="text-white text-4xl font-extrabold mb-2 text-left pl-2">
        GALLERY
      </h1>

      <button ref={prevRef} className={prevButtonClassNAme}>
        ←
      </button>
      <button ref={nextRef} className={nextButtonClassName}>
        →
      </button>

      <Slider prevRef={prevRef} nextRef={nextRef} />
    </div>
  );
};
