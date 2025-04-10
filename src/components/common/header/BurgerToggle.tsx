import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { BURGER_ICON } from "./constants";

interface BurgerToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const BurgerToggle = ({ isOpen, onToggle }: BurgerToggleProps) => {
  return (
    <div className="md:hidden flex items-center" onClick={onToggle}>
      {isOpen ? (
        <FaTimes className={BURGER_ICON} />
      ) : (
        <FaBars className={BURGER_ICON} />
      )}
    </div>
  );
};
