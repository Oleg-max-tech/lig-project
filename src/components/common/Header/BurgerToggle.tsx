import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

interface Props {
  isOpen: boolean;
  toggleOpen: VoidFunction;
}

export const BurgerIcon = ({ isOpen, toggleOpen }: Props) => {
  const Icon = isOpen ? FaTimes : FaBars;

  return (
    <div
      className="md:hidden flex items-center cursor-pointer"
      onClick={toggleOpen}
    >
      <Icon className="text-white h-6 w-6" />
    </div>
  );
};
