import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const DEFAULT_BURGER_ICON = "text-white h-6 w-6";
export const BurgerToggle = ({ isOpen, onToggle }: Props) => {
  return (
    <div
      className="md:hidden flex items-center cursor-pointer"
      onClick={onToggle}
    >
      {isOpen ? (
        <FaTimes className={DEFAULT_BURGER_ICON} />
      ) : (
        <FaBars className={DEFAULT_BURGER_ICON} />
      )}
    </div>
  );
};
