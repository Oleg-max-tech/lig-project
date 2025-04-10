import React from "react";

type IconButtonProps = {
  icon: React.ElementType;
  buttonClassName?: string;
  iconClassName?: string;
};

export const IconButton = ({
  icon: Icon,
  buttonClassName = "",
  iconClassName = "",
}: IconButtonProps) => {
  return (
    <button
      className={`
        group relative flex items-center justify-center
        bg-white rounded-lg p-2 overflow-hidden
        transition-all duration-300 ease-in-out
        ${buttonClassName}
        hover:bg-red-500
      `}
    >
      {/* Іконка */}
      <Icon
        className={`
          text-black group-hover:text-white
          ${iconClassName}
        `}
      />
    </button>
  );
};
