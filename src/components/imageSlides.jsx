import { useState, useEffect } from "react";
import pic1 from "../assets/hpics/100.jpg";
import pic2 from "../assets/hpics/200.jpg";
import pic3 from "../assets/hpics/300.jpg";
import pic4 from "../assets/hpics/400.jpg";
import logo from "../assets/hpics/logo.jpg";
import { BsChevronCompactRight, BsChevronLeft } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export const ImageSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideImages = [pic1, pic2, pic3, pic4, logo];
  const prevImage = () => {
    let isFirstSlide = currentIndex === 0;
    let newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextImage = () => {
    let isLastSlide = currentIndex === slideImages.length - 1;
    let newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(interval); // cleanup
  }, [slideImages.length]);

  return (
    <section className="flex justify-between">
      {/* left image */}
      <div
        style={{ backgroundImage: `url(${pic2})` }}
        className="h-[28rem] basis-[25%] bg-center bg-cover"
      ></div>

      {/* right image */}
      <div
        style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
        className="h-[28rem] basis-[74%] bg-center bg-cover relative duration-500 ease-in group"
      >
        {/* left arrow */}
        <div
          onClick={prevImage}
          className="hidden group-hover:block absolute top-2/4 left-6 -translate-x-0 translate-y-2/4 rounded-full p-2 bg-black/50 text-white cursor-pointer"
        >
          <BsChevronLeft />
        </div>

        {/* right arrow */}
        <div
          onClick={nextImage}
          className="hidden group-hover:block absolute top-2/4 right-5 -translate-x-0 translate-y-2/4 rounded-full p-2 bg-black/50 text-white cursor-pointer"
        >
          <BsChevronCompactRight />
        </div>
        {/* yellow box and white */}
        <div className="hidden md:flex items-center justify-center absolute -top-14 -translate-x-2/4 left-2/4 gap-4">
          {/* yellow */}
          <div className="bg-yellow-200 md:h-56 w-80 p-8 justify-left gap-4 flex flex-col font-medium tracking-wide ">
            <div className="flex justify-between ">
              <h2 class="text-xl font-bold text-black items-center">
                Built on Excellence
              </h2>
              <FiArrowUpRight size={30} />
            </div>
            <small>
              Careful craftsmanship, and a commitment to excellence at every
              stage. When we build, we build not only for today, but for
              generations who will rely on the strength of our work
            </small>
          </div>

          {/* white */}
          <div className="bg-white text-black md:h-56 w-80 p-8 justify-left gap-4 flex flex-col font-medium tracking-wide ">
            <div className="flex justify-between ">
              <h2 class="text-xl font-bold items-center">
                Values That Inspires
              </h2>
              <FiArrowUpRight size={30} />
            </div>
            <small>
              By combining innovation with integrity, we create solutions that
              are not only functional and durable but also inspiring spaces and
              structures that stand as a lasting symbol of trust and dedication
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
