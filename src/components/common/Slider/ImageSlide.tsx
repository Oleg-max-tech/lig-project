import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export const ImageSlide = ({ src, index }: Props) => {
  return (
    <div className="w-full relative rounded-lg overflow-hidden aspect-[1/1]">
      <Image src={src} alt={`Image ${index}`} fill className="object-cover" />
    </div>
  );
};
