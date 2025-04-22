"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ImageSlide } from "./ImageSlide";
import { sliderImages } from "./constants";

interface Props {
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
}

export const Slider = ({ prevRef, nextRef }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      loop
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
      slidesPerView="auto"
      className="px-8"
    >
      {sliderImages.map((src, index) => (
        <SwiperSlide key={`${index}-${src}`} className="max-w-75 sm:max-w-62.5">
          <ImageSlide src={src} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
