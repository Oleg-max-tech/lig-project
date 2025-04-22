"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import { serviceData } from "./services";
import { ServiceNav } from "./ServiceNav";

export const ServiceSection: React.FC = () => {
  const [activeService, setActiveService] = useState(serviceData[0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const onSelectService = (slug: string) => {
    const selectedService =
      serviceData.find((item) => item.slug === slug) || serviceData[0];
    setActiveService(selectedService);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="px-4 py-6 max-w-7xl mx-auto font-montserrat"
      ref={sectionRef}
    >
      <div className="inline-block mb-6">
        <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-white to-gray-600 bg-clip-text mb-2 inline-block">
          {activeService.title}
        </h1>
        <div className="h-0.5 bg-gradient-to-r from-white to-gray-600 rounded-full mt-2" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <ServiceNav
          activeSlug={activeService.slug}
          onSelectService={onSelectService}
        />

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="w-full md:w-3/5">
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-[400px] relative">
              <Image
                src={activeService.image}
                alt={activeService.title}
                className="object-cover rounded-lg w-full h-full"
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className="text-white flex flex-col w-full md:w-2/5 h-full justify-between">
            <div>
              <p className="text-sm leading-relaxed mb-6">
                {activeService.description}
              </p>

              <ul className="text-sm mt-10 list-disc list-inside pl-6">
                {activeService.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button className="px-6 py-2 text-lg font-semibold text-black bg-gray-300 border-2 border-gray-800 rounded-lg transition-colors hover:bg-red hover:text-white">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
