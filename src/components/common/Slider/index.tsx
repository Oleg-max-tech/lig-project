"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import classNames from "classnames";

import "swiper/css";
import "swiper/css/navigation";

import image1 from "@/assets/image1.svg";
import image2 from "@/assets/image2.svg";
import image3 from "@/assets/image3.svg";
import image4 from "@/assets/image4.svg";
import image5 from "@/assets/image5.svg";
import image6 from "@/assets/image6.svg";
import image7 from "@/assets/image7.svg";
import image8 from "@/assets/image8.svg";
import image9 from "@/assets/image9.svg";
import image10 from "@/assets/image10.svg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const arrowBase =
  "z-20 text-white bg-white/10 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center";
const buttonClassPrev = classNames(
  arrowBase,
  "absolute left-[-40px] top-1/2 -translate-y-1/2"
);
const buttonClassNext = classNames(
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
            <div className="w-[300px] h-[200px] relative rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Image ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
