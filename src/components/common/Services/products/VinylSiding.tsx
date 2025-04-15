import { ServiceSection } from "../ServiceSection";
import vinylSiding from "@/assets/Services/vinylSiding.svg";

export const VinylPanelsPage = () => {
  return (
    <ServiceSection
      title="Vinyl siding"
      image={vinylSiding}
      description="Vinyl siding is a cost-effective and durable option, commonly used in residential construction. Its versatility in color and design makes it a popular choice for homeowners looking for a balance of affordability and aesthetics. "
      features={[
        "Cost-Effective: Affordable compared to other siding options.",
        "Low Maintenance: Only requires occasional washing to maintain appearance.",
        "Weather Resistant: Can withstand harsh weather conditions, including UV exposure and heavy winds.",
        "Variety of Styles: Available in different styles and colors, ranging from traditional to contemporary designs.",
      ]}
      activeSlug="vinyl"
    />
  );
};
