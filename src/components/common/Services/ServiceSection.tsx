"use client";

import Image from "next/image";
import { serviceData } from "./services";
import { useActiveService } from "./useActiveService";

export const ServiceSection: React.FC = () => {
  const { activeSlug, activeService, handleSelect, contentRef } =
    useActiveService();

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto font-montserrat">
      <div className="inline-block mb-6">
        <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-white to-gray-600 bg-clip-text mb-2 inline-block">
          {activeService.title}
        </h1>
        <div className="h-0.5 bg-gradient-to-r from-white to-gray-600 rounded-full mt-2" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <nav className="w-full md:w-1/5 space-y-3">
          {serviceData.map((item) => {
            const isActive = activeSlug === item.slug;
            return (
              <button
                key={item.slug}
                onClick={() => handleSelect(item.slug)}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-red text-white"
                    : "bg-gray-800 text-white hover:bg-red"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>

        <div
          className="flex flex-col md:flex-row items-stretch gap-6 w-full"
          ref={contentRef}
        >
          <div className="w-full md:w-3/5 h-full">
            <Image
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover rounded-lg"
              width={800}
              height={600}
            />
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

            <div className="mt-auto pt-6">
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
