export const ServicesCard = ({ image, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-72 h-72 bg-white object-center bg-cover relative"
    >
      <div className="w-full h-12 font-medium bg-white absolute bottom-0 justify-center flex items-center">
        <small>{title}</small>
      </div>
    </div>
  );
};
