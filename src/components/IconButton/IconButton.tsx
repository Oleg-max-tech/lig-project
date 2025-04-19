import React from "react";
import cn from "classnames";

type IconButtonProps = {
  children: React.ReactNode;
  buttonClassName?: string;
};

export const IconButton = ({
  children,
  buttonClassName = "",
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        "group relative flex items-center justify-center",
        "bg-white rounded-lg p-2 overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "hover:bg-red-500",
        buttonClassName
      )}
    >
      {children}
    </button>
  );
};
