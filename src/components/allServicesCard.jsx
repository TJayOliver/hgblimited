export const AllServicesCard = ({ title, text, image }) => {
  return (
    <div className="h-44 w-56 p-8 relative group overflow-hidden">
      <img
        src={image}
        loading="lazy"
        alt={title}
        className="absolute inset-0 w-0 h-full bg-cover bg-center opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-in-out"
      />
      <div className="relative z-10">
        <h2 className="font-medium group-hover:hidden">{title}</h2>
        <small className="group-hover:hidden">{text}</small>
      </div>
    </div>
  );
};
