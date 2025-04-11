import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { DEFAULT_BURGER_ICON } from "./constants";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

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
