import { ServiceSection } from "../ServiceSection";
import cempritPanels from "@/assets/Services/cempritPanels.svg";

export const CembritPanelsPage = () => {
  return (
    <ServiceSection
      title="Cembrit Panels"
      image={cempritPanels}
      description="Cembrit panels are fiber cement panels offering high durability, low maintenance, and excellent fire resistance. They are available in a wide range of textures and colors."
      features={[
        "Fire Resistant: Meets high fire safety standards.",
        "Weatherproof: Resistant to frost, rain, and heat.",
        "Aesthetic Flexibility: Various textures and finishes.",
        "Low Maintenance: Requires minimal upkeep.",
      ]}
      activeSlug="cembrit"
    />
  );
};
