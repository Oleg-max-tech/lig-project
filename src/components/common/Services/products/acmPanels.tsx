import { ServiceSection } from "../ServiceSection";
import acmPanels from "@/assets/Services/acmPanels.svg";

export const AcmPanelsPage = () => {
  return (
    <ServiceSection
      title="ACM panels"
      activeSlug="acm" // це ключ, який зв'язується з меню
      description="ACM metal panels are lightweight but offer excellent rigidity and strength, ideal for sleek and modern facades. These panels feature a layered construction with aluminum sheets on the outer layers and a non-aluminum core."
      features={[
        "Lightweight: Easier to install while maintaining structural strength.",
        "Customizable: Available in various colors, textures, and finishes to match any design.",
        "Weather Resistant: High tolerance to wind, rain, and corrosion.",
        "Energy Efficient: Enhances building insulation and energy efficiency.",
      ]}
      image={acmPanels}
    />
  );
};
