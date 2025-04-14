// components/About/AboutCardsGrid.tsx
import Image from "next/image";
import { AboutCard } from "./AboutCard";
import briefcase from "@/assets/briefcase.svg";
import chart from "@/assets/chart.svg";
import verify from "@/assets/verify.svg";

export const AboutCardsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pt-6">
      <AboutCard
        icon={<Image src={briefcase} width={40} height={40} alt="briefcase" />}
        title="Expertise"
        description="We prioritize the well-being and safety of our customers and employees. We continuously elevate our team’s craftsmanship, ensuring customer satisfaction."
      />
      <AboutCard
        icon={<Image src={chart} width={40} height={40} alt="chart" />}
        title="Integrity"
        description="The highest ethical standards are crucial, and we take responsibility for our actions by always going the extra mile."
      />
      <AboutCard
        icon={<Image src={verify} width={40} height={40} alt="verify" />}
        title="Quality"
        description="Our commitment to excellence in all we do focuses on quality and continuous craft improvement."
      />
    </div>
  );
};
