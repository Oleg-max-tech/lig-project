import cn from "classnames";

export const MapComponent = () => {
  return (
    <div className="relative mt-20 w-full h-80">
      <div
        className={cn(
          "absolute text-black font-extrabold",
          "text-4xl sm:text-5xl lg:text-6xl",
          "left-4 lg:left-16 sm:left-8 translate-y-0",
          "sm:top-1/2 sm:left-0 sm:bottom-auto sm:-translate-y-30",
          "lg:translate-y-30"
        )}
      >
        LOCATION
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.727428473388!2d4.360426176329296!3d48.958675771345895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ebe081fecc5555%3A0x4c43633e46d3babf!2sILG%20Constructions!5e0!3m2!1sru!2sua!4v1744806645457!5m2!1sru!2sua"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
