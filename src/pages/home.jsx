import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ImageSlides } from "../components/imageSlides";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ServicesCard } from "../components/servicesCard";
import building from "../assets/building.jpg";
import cleaning from "../assets/cleaning.jpg";
import land from "../assets/land.jpg";
import painting from "../assets/painting.jpg";
import plumbing from "../assets/plumbing.jpg";
import agric from "../assets/agric.png";
import { useEffect, useState, useRef } from "react";
import { SEO } from "../components/seo";

const Home = () => {
  const myRef = useRef();
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  const pageLink = "";
  const pageTitle = "Home | Hergis Bridge Limited Company";
  const pageDescription =
    "Hergis Bridge Limited Company is a multi-service construction and engineering firm in Sunyani, Ghana. We deliver roads, railways, building construction, civil works, real estate development, vehicle sales, electrical & plumbing installations, CCTV installations, site preparation and more. Your Dream, Our Concern.";

  return (
    <>
      <SEO
        pageDescription={pageDescription}
        pageLink={pageLink}
        pageTitle={pageTitle}
      />

      <Header myElementIsVisible={myElementIsVisible} />

      {/* quote */}
      <aside
        id="top"
        className="flex h-96 justify-between p-8 items-center italic"
      >
        {/* large side quote */}
        <div className="flex flex-col justify-between gap-4">
          <h2 id="quote" ref={myRef} className="font-bold text-2xl md:text-6xl">
            From the ground up, we build your world.
          </h2>
        </div>

        {/* small side quote */}
        <div>
          <hr className="text-gray-200"></hr>
          <h3>
            Constructing your homes, paving your roads, securing your land, and
            delivering your journey. We don't just build structures; we build
            futures.
          </h3>
        </div>
      </aside>

      <main id="about-us" className="calc-[]">
        {/* images */}
        <ImageSlides />

        {/* company details */}
        <section className="h-[26rem] p-8 flex items-center">
          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="font-bold text-lg md:text-3xl max-w-3xl">
                We deliver results. Quality homes, reliable roads, valuable
                land, and seamless vehicle shipping all under one roof
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <p className="italic">
                We have specialism in civil and residential construction, real
                estate investment, and international logistics, providing a
                complete solution for building your world from the ground up.
              </p>
              <a
                href="/services"
                className="p-2 font-medium bg-red-500/90 hover:bg-red-400 transition-all ease-in duration-100 md:w-2/6 gap-4 justify-center text-white rounded-3xl flex items-center"
              >
                <p>Our Work</p>
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
          <hr className="text-gray-200"></hr>
        </section>

        {/* our services */}
        <section className=" bg-gray-900 p-8 ">
          <h2 className="md:text-2xl text-white text-center p-3">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            <ServicesCard
              image={building}
              title="Construction and Development"
            />
            <ServicesCard image={land} title="Sales and Trade" />
            <ServicesCard
              image={plumbing}
              title="Installation and Maintenance"
            />
            <ServicesCard image={painting} title="Design and Support" />
            <ServicesCard image={cleaning} title="Cleaning Services" />
            <ServicesCard
              image={agric}
              title="Agriculture and General Services"
            />
          </div>
        </section>

        {/* why choose us */}
        <section class="p-8 h-auto md:h-[30rem] flex flex-col items-center justify-center">
          <div class="max-w-5xl mx-auto text-center gap-4 flex justify-between flex-col">
            <h2 class="md:text-3xl font-bold text-black mb-6">Why Choose Us</h2>
            <p class="text-lg text-gray-700 mb-10">
              We go beyond delivering projects, we build lasting trust. From
              large-scale infrastructure to everyday services, our work is
              guided by precision, integrity and a dedication to exceed
              expectations.
            </p>

            <div class="grid gap-8 md:grid-cols-3 text-left">
              <div class="p-6 bg-white shadow rounded-xl">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  Multi-Sector Expertise
                </h3>
                <p class="text-gray-700">
                  From construction and real estate development to farming,
                  vehicle sales and technology installations, our diverse
                  capabilities mean you can rely on a single trusted partner for
                  multiple needs.
                </p>
              </div>

              <div class="p-6 bg-white shadow rounded-xl">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  Innovation & Reliability
                </h3>
                <p class="text-gray-700">
                  Combining modern technology with years of experience, we
                  consistently bring creative solutions and dependable results
                  no matter the size or complexity.
                </p>
              </div>

              <div class="p-6 bg-white shadow rounded-xl">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  Proven Track Record
                </h3>
                <p class="text-gray-700">
                  Our portfolio showcases successful projects across Ghana and
                  beyond, earning us a reputation for excellence and
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer color={"bg-gray-900"} textColor={"text-white/90"} />
    </>
  );
};

export default Home;
