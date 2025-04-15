import { ServiceSection } from "../ServiceSection";
import woodSiding from "../../../../assets/Services/woodSiding.svg";

export const WoodSidingPanelsPage = () => {
  return (
    <ServiceSection
      title="Wood siding "
      image={woodSiding}
      description="Wood siding offers a natural and classic appeal, adding warmth and charm to any building. This type of siding comes in various styles, including clapboard, shingles, and board-and-batten, allowing for customization based on the architectural style. "
      features={[
        "Natural Beauty: Provides a warm, organic aesthetic that blends well with nature.",
        "Customizable: Available in various wood types, finishes, and styles to suit traditional or modern designs.",
        "Eco-Friendly: Made from renewable and biodegradable materials.",
        "Versatility: Comes in different forms, such as clapboard or shingles, offering design flexibility.",
      ]}
      activeSlug="wood"
    />
  );
};
