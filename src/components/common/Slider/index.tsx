"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ImageSlide } from "./ImageSlide";
import cn from "classnames";

import "swiper/css";
import "swiper/css/navigation";

import { images } from "./constants";

const arrowBase =
  "z-20 text-white bg-white/10 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center";
const buttonClassPrev = cn(
  arrowBase,
  "absolute left-[-40px] top-1/2 -translate-y-1/2"
);
const buttonClassNext = cn(
  arrowBase,
  "absolute right-[-40px] top-1/2 -translate-y-1/2"
);

export const GallerySlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Це потрібно, щоб Swiper побачив кнопки
  }, []);

  return (
    <div className="relative bg-black py-12 px-4 max-w-300 mx-auto">
      <h1 className="text-white text-4xl font-extrabold mb-2 text-left pl-2">
        GALLERY
      </h1>

      <button ref={prevRef} className={buttonClassPrev}>
        ←
      </button>
      <button ref={nextRef} className={buttonClassNext}>
        →
      </button>

      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper) => {
          if (
            typeof swiper.params.navigation !== "boolean" &&
            swiper.params.navigation !== undefined
          ) {
            swiper.params.navigation.prevEl = prevRef.current!;
            swiper.params.navigation.nextEl = nextRef.current!;
          }
        }}
        spaceBetween={20}
        slidesPerView={3.5}
        className="px-8"
      >
        {images.map((src, index) => (
          <SwiperSlide key={`${index}-${src.src}`}>
            <ImageSlide src={src} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
