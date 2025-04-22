import cn from "classnames";
import { serviceData } from "./services";

interface ServiceNavProps {
  activeSlug: string;
  onSelectService: (slug: string) => void;
}

export const ServiceNav: React.FC<ServiceNavProps> = ({
  activeSlug,
  onSelectService,
}) => {
  return (
    <nav className="w-full md:w-1/5 space-y-3">
      {serviceData.map((item) => (
        <button
          key={item.slug}
          onClick={() => onSelectService(item.slug)}
          className={cn(
            "w-full text-left px-4 py-2 rounded-lg font-medium transition-colors duration-200",
            activeSlug === item.slug
              ? "bg-red text-white"
              : "bg-gray-800 text-white hover:bg-red"
          )}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};
