"use client";
import { FaPhone, FaCommentDots } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a]  max-w-full">
      <div className=" mx-auto rounded-xl px-8 md:px-48 py-8  md:p-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-white text-base md:text-lg">
        {/* Логотип */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="Logo" className="h-20 mb-2" />
        </div>

        <div className="flex flex-col md:flex-row md:gap-50 text-center md:text-left">
          <div className="flex flex-col gap-5">
            <a href="#" className="hover:text-red-500 transition">
              Services
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Gallery
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <a href="#" className="hover:text-red-500 transition">
              Home
            </a>
            <a href="#" className="hover:text-red-500 transition">
              About us
            </a>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start">
            <div className="flex items-center gap-5">
              <img src="/Phone.png" alt="Phone Icon" className="w-6 h-6" />
              <a
                href="tel:8144245702"
                className="hover:text-red-500 transition"
              >
                814-424-5702
              </a>
            </div>
            <div className="flex items-center gap-5">
              <img src="/Email.png" alt="Email Icon" className="w-6 h-6" />
              <a
                href="mailto:andrey@ilgconstruction.com"
                className="hover:text-red-500 transition"
              >
                andrey@ilgconstruction.com
              </a>
            </div>
          </div>
        </div>

        {/* Контакти з іконками вертикально */}
        <div className="flex flex-col gap-4 self-start">
          <button className="bg-[#e6dcd8] p-3 rounded-md">
            <FaPhone className="text-black w-4 h-4" />
          </button>
          <button className="bg-[#e6dcd8] p-3 rounded-md">
            <FaCommentDots className="text-black w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
