import Image from "next/image";

type ImageSlideProps = {
  src: string;
  index: number;
};

export const ImageSlide = ({ src, index }: ImageSlideProps) => {
  return (
    <div className="w-74 h-50 relative rounded-lg overflow-hidden">
      <Image src={src} alt={`Image ${index}`} fill className="object-cover" />
    </div>
  );
};
