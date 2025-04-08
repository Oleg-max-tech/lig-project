export default function AcmPanels() {
  const features = [
    "Lightweight: Easier to install while maintaining structural strength.",
    "Customizable: Available in various colors, textures, and finishes to match any design.",
    "Weather Resistant: High tolerance to wind, rain, and corrosion.",
    "Energy Efficient: Enhances building insulation and energy efficiency.",
  ];

  return (
    <div className="flex w-[1290px] ml-6 mt-15">
      <div className="w-max h-max">
        <img src="/ACM-panels.png" alt="ACM Panels" />
      </div>
      <div className="ml-8 mt-23 w-96">
        <span>
          ACM metal panels are lightweight but offer excellent rigidity and
          strength, ideal for sleek and modern facades. These panels feature a
          layered construction with aluminum sheets on the outer layers and a
          non-aluminum core.
        </span>{" "}
        <ul className="list-none">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 before:content-['•'] before:text-red-500 mt-1"
            >
              {feature}
            </li>
          ))}
        </ul>
        <button className="bg-amber-50 text-black px-6 py-3 rounded-md transition-colors mt-5 duration-300 hover:bg-red-500">
          Get a Consultation
        </button>
      </div>
    </div>
  );
}
