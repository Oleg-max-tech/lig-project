import { ServiceSection } from "../ServiceSection";
import architectural from "@/assets/Services/architectural.svg";

export const ArchitecturalPanelsPage = () => {
  return (
    <ServiceSection
      title="Architectural panels"
      image={architectural}
      description="Architectural panels offer a high degree of customization and are used to create unique facades with depth and texture. These panels are available in various materials and are suitable for adding an innovative look to any building."
      features={[
        "Custom Design: Allows for creative freedom in architectural expression.",
        "Durable Materials: Available in materials that resist environmental wear and tear.",
        "Adds Depth: Perfect for creating multi-dimensional facades.",
        "Sustainable Options: Many architectural panels are made from eco-friendly materials.",
      ]}
      activeSlug="architectural"
    />
  );
};
