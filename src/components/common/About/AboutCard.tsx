import Image, { StaticImageData } from "next/image";

interface AboutCardProps {
  iconSrc: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}

export const AboutCard = ({
  iconSrc,
  iconAlt,
  title,
  description,
}: AboutCardProps) => (
  <div className="flex flex-col items-start gap-4">
    <Image src={iconSrc} width={40} height={40} alt={iconAlt} />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);
