import { ServiceSection } from "../ServiceSection";
import nichinaPanels from "@/assets/Services/nichinaPanels.svg";

export const NichinaPanelsPage = () => {
  return (
    <ServiceSection
      title="Nichiha panels"
      image={nichinaPanels}
      description="Nichiha panels are fiber cement panels offering a versatile range of textures, including wood, stone, and metal-like finishes. These panels are widely used for commercial, residential, and institutional buildings due to their aesthetic flexibility and durability."
      features={[
        "Variety of Textures: Available in finishes like wood, stone, and metal.",
        "Durability: Resistant to harsh weather conditions, including extreme temperatures and humidity.",
        "Fire Resistant: Fiber cement offers excellent fire resistance, increasing safety.",
        "Low Maintenance: Requires minimal upkeep over the years.",
      ]}
      activeSlug="nichiha"
    />
  );
};
