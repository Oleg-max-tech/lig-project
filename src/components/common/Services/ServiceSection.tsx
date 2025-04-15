import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceSectionProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  activeSlug: string;
}

const menuItems = [
  { label: "Nichiha panels", slug: "nichiha" },
  { label: "Cembrit panels", slug: "cembrit" },
  { label: "James Hardie siding", slug: "james-hardie" },
  { label: "Trespa panels", slug: "trespa" },
  { label: "ACM panels", slug: "acm" },
  { label: "Architectural panels", slug: "architectural" },
  { label: "Vinyl siding", slug: "vinyl" },
  { label: "Wood siding", slug: "wood" },
];

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  image,
  description,
  features = [],
  activeSlug,
}) => {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto font-montserrat">
      <div className="inline-block mb-6">
        <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-white to-gray-600 bg-clip-text mb-2 inline-block">
          {title}
        </h1>
        <div className="h-0.5 bg-gradient-to-r from-white to-gray-600 rounded-full mt-2" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Меню */}
        <nav className="w-full md:w-1/5 space-y-3">
          {menuItems.map((item) => {
            const isActive = activeSlug === item.slug;
            return (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-red text-white" // активний — червоний і без hover
                      : "bg-gray-800 text-white hover:bg-red" // неактивний — темно-сірий і з hover
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Контент */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
          {/* Зображення */}
          <div className="w-full md:w-3/5 h-full">
            <Image
              src={image}
              alt={title || "Service Image"}
              className="w-full h-full object-cover rounded-lg"
              width={800}
              height={600}
            />
          </div>

          {/* Текстовий блок */}
          <div className="text-white flex flex-col w-full md:w-2/5 h-full justify-between">
            <div>
              <p className="text-sm leading-relaxed mb-6">{description}</p>

              <ul className="text-sm mt-10 list-disc list-inside pl-6">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <button className="px-6 py-2 text-lg font-semibold text-black bg-gray-300 border-2 border-gray-800 rounded-lg transition-colors hover:bg-red hover:text-white">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
