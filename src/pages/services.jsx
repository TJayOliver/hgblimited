import { HeaderForServices } from "../components/header.jsx";
import { Footer } from "../components/footer.jsx";
import hero from "../assets/servicehero/100.jpg";
import { AllServicesCard } from "../components/allServicesCard.jsx";
import { list } from "../lib/listofservices.js";
import { useEffect, useState, useRef, act } from "react";
import { ContactForm } from "../components/contactform.jsx";
import { SEO } from "../components/seo.jsx";

const Services = () => {
  const myRef = useRef();
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  const pageLink = "services";
  const pageTitle = "Services | Hergis Bridge Limited Company";
  const pageDescription =
    "Discover the full range of construction and engineering services offered by Hergis Bridge Limited, delivering reliable, high-quality solutions across Ghana.";

  return (
    <>
      <SEO
        pageDescription={pageDescription}
        pageLink={pageLink}
        pageTitle={pageTitle}
      />

      <section
        id="top"
        ref={myRef}
        style={{ backgroundImage: `url(${hero})` }}
        className="relative flex flex-col h-[27rem]  bg-center bg-cover"
      >
        {/* sticky header */}
        <HeaderForServices myElementIsVisible={myElementIsVisible} />

        {/* content section */}
        <div className="flex relative flex-col justify-center items-start text-white gap-2 pl-8 h-full">
          <p className="text-4xl font-bold max-w-xl">
            Our Unwavering Commitment to Excellence and Client Satisfaction
          </p>
          <small className="max-w-lg">
            Every project we undertake is guided by integrity, precision, and a
            relentless pursuit of excellence, because your satisfaction is at
            the foundation of everything we build
          </small>
        </div>
      </section>

      <main>
        {/* services */}
        <section className="p-14">
          <h2 className="font-bold text-md tracking-widest">SERVICES</h2>
          <p className="text-3xl font-medium p-2">
            Hergis Bridge is Your One-Stop Solution for Building Dreams
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 place-items-center">
            {list.map((service) => (
              <AllServicesCard
                key={service.id}
                title={service.title}
                text={service.text}
                image={service.image}
              />
            ))}
          </div>
        </section>

        {/* enquire */}
        <section className=" bg-gray-900 text-white p-8 flex justify-center">
          <ContactForm />
        </section>
      </main>

      <Footer color={"bg-white"} textColor={"text-slate-800"} />
    </>
  );
};

export default Services;
