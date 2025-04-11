"use client";
import React from "react";
import Image from "next/image";
import name_photo from "../../assets/name_photo.svg";

export default function IlgConstruction() {
  return (
    <section className="relative h-screen w-full">
      {/* Background */}
      <Image
        src={name_photo}
        alt="Building background"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Текст зліва */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-8 md:pl-24 text-white">
        <span className="text-primaryRed text-[80px] md:text-[140px] font-extrabold leading-none tracking-tight uppercase">
          ILG
        </span>

        <p className="text-lg md:text-2xl text-white/80 mt-2 mb-1">
          Exterior Siding
        </p>

        <h1 className="text-[60px] md:text-[100px] font-extrabold leading-none tracking-tight uppercase">
          CONSTRUCTION
        </h1>
      </div>

      {/* Опис у правому нижньому куті */}
      <div className="absolute bg-black  bottom-8 right-8 max-w-sm text-sm text-white/90 z-10 text-right leading-relaxed">
        Our primary objective has always been to transform neighborhoods into
        visually appealing and harmonious spaces, focusing on enhancing the
        aesthetic value of each building we work on, one project at a time.
      </div>
    </section>
  );
}
