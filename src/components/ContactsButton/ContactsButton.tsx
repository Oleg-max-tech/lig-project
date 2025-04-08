import { FaPhone, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

export function IconsHeader() {
  return (
    <div className="hidden md:flex gap-3 pr-8 lg:pr-16">
      <button className="bg-white rounded-lg p-2">
        <FaPhoneAlt className="h-8 w-8 text-black" />
      </button>
      <button className="bg-white rounded-lg p-2">
        <FaCommentDots className="h-8 w-8 text-black" />
      </button>
    </div>
  );
}

export function IconsFooter() {
  return (
    <div className="flex flex-col gap-4 self-start">
      <button className="bg-[#e6dcd8] p-3 rounded-md">
        <FaPhone className="text-black w-4 h-4" />
      </button>
      <button className="bg-[#e6dcd8] p-3 rounded-md">
        <FaCommentDots className="text-black w-4 h-4" />
      </button>
    </div>
  );
}
