import { AboutCard } from "./AboutCard";
import briefcase from "@/assets/briefcase.svg";
import chart from "@/assets/chart.svg";
import verify from "@/assets/verify.svg";

export const AboutCardsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pt-6">
      <AboutCard
        iconSrc={briefcase}
        iconAlt="briefcase"
        title="Expertise"
        description="We prioritize the well-being and safety of our customers and employees. We continuously elevate our team’s craftsmanship, ensuring customer satisfaction."
      />
      <AboutCard
        iconSrc={chart}
        iconAlt="chart"
        title="Integrity"
        description="The highest ethical standards are crucial, and we take responsibility for our actions by always going the extra mile."
      />
      <AboutCard
        iconSrc={verify}
        iconAlt="verify"
        title="Quality"
        description="Our commitment to excellence in all we do focuses on quality and continuous craft improvement."
      />
    </div>
  );
};
