import { ServiceSection } from "../ServiceSection";
import trespaPanels from "@/assets/Services/trespaPanels.svg";

export const TrespaPanelsPage = () => {
  return (
    <ServiceSection
      title="Trespa panels  "
      image={trespaPanels}
      description="Trespa panels are known for their high-pressure laminate (HPL) construction, providing outstanding strength and durability. They are perfect for modern architectural designs due to their resistance to external factors like moisture, UV rays, and impact."
      features={[
        "Moisture Resistant: Prevents mold growth and structural.",
        "UV Resistant: Maintains color and finish under prolonged sun exposure.",
        "Impact Resistant: Designed to withstand physical wear and tear, making them ideal for high-traffic areas.",
        "Wide Range of Colors: Available in many colors and finishes to suit any design.",
      ]}
      activeSlug="trespa"
    />
  );
};
