"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

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

const buttonClassPrev =
  "swiper-button-prev absolute  top-1/2 z-10 text-white bg-white/10 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transform -translate-y-1/2";
const buttonClassNext =
  "swiper-button-next absolute  top-1/2 z-10 text-white bg-white/10 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transform -translate-y-1/2";

export const GallerySlider = () => {
  return (
    <div className="relative bg-black py-12 px-4 max-w-300 mx-auto">
      <h1 className="text-white text-4xl font-extrabold mb-2 text-left pl-2">
        GALLERY
      </h1>

      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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

        <button className={buttonClassPrev}>←</button>
        <button className={buttonClassNext}>→</button>
      </Swiper>
    </div>
  );
};
