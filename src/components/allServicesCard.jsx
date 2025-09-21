export const AllServicesCard = ({ title, text, image }) => {
  return (
    <div className="overflow-hidden w-full max-w-xs">
      {/* -------- Image Section -------- */}
      <div className="relative h-56 md:h-44 group">
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="
            h-full w-full object-cover
            md:absolute md:inset-0
            md:w-0 md:opacity-0
            md:group-hover:w-full md:group-hover:opacity-100
            transition-all duration-500 ease-in-out
          "
        />

        {/* Desktop overlay text */}
        <div className="hidden md:block relative z-10 p-4 text-black">
          <h2 className="font-medium group-hover:hidden">{title}</h2>
          <small className="group-hover:hidden">{text}</small>
        </div>
      </div>

      {/* -------- Mobile bottom text -------- */}
      <div className="block md:hidden border border-gray-300 p-4 text-center">
        <h2 className="font-medium">{title}</h2>
        <small>{text}</small>
      </div>
    </div>
  );
};
