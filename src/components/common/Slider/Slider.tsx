"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ImageSlide } from "./ImageSlide";
import { images } from "./constants";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
};

export const Slider = ({ prevRef, nextRef }: Props) => {
  useEffect(() => {}, []);

  return (
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
  );
};
