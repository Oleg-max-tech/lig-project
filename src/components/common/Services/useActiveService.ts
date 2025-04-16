// hooks/useActiveService.ts

import { useRef, useState } from "react";
import { serviceData } from "./services"; // Заміни на відповідний шлях до файлу з даними

export const useActiveService = () => {
  const [activeSlug, setActiveSlug] = useState("nichiha");
  const contentRef = useRef<HTMLDivElement>(null);

  const activeService =
    serviceData.find((item) => item.slug === activeSlug) || serviceData[0];

  const handleSelect = (slug: string) => {
    setActiveSlug(slug);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return {
    activeSlug,
    activeService,
    handleSelect,
    contentRef,
  };
};
