import { ServiceSection } from "../ServiceSection";
import james from "@/assets/Services/james.svg";

export const JamesPanelsPage = () => {
  return (
    <ServiceSection
      title="James Hardie siding "
      image={james}
      description="James Hardie siding is a trusted fiber cement solution known for its durability, resistance to fire, and wide range of styles. It offers a balance between beauty and toughness, making it a go-to option for exterior cladding on both homes and commercial properties."
      features={[
        "Weatherproof: Withstands extreme weather, including heavy rain and wind.",
        "Pest Resistant: Fiber cement resists insects and rot, unlike wood.",
        "Color Versatility: Available in various colors, with ColorPlus® technology for fade resistance.",
        "Sustainability: Made from sustainable materials, contributing to eco-friendly construction.",
      ]}
      activeSlug="james-hardie"
    />
  );
};
