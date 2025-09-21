import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ContactForm } from "../components/contactform";
import pic from "../assets/servicehero/400.jpg";
import { useEffect, useState, useRef } from "react";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { SEO } from "../components/seo";

const ContactCard = ({ heading, text, icon }) => {
  return (
    <div className=" flex flex-col gap-2 p-4 h-auto w-56 bg-slate-50 border border-gray-50 rounded-xl">
      <div className="flex justify-between">
        <h3 className="font-medium">{heading}</h3>
        {icon}
      </div>
      <small>{text}</small>
    </div>
  );
};

const Contact = () => {
  const myRef = useRef();
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  const pageLink = "contact";
  const pageTitle = "Contact | Hergis Bridge Limited Company";
  const pageDescription =
    "Get in touch with Hergis Bridge Limited for inquiries, project consultations, or partnership opportunities. Our team in Sunyani, Bono Region, is ready to assist you";

  return (
    <>
      <SEO
        pageDescription={pageDescription}
        pageLink={pageLink}
        pageTitle={pageTitle}
      />

      <Header myElementIsVisible={myElementIsVisible} />

      <aside
        style={{ backgroundImage: `url(${pic})` }}
        className="h-96 p-8 flex items-center bg-center bg-cover "
      >
        {/* hear */}
        <section className="flex justify-center items-center gap-6">
          <h2 className="inline-block rounded-xl bg-yellow-200 text-5xl font-bold m-0 leading-none max-w-xl p-3">
            We Would Love to Hear From You
          </h2>

          <p className="text-center max-w-xl text-white">
            Whether you have a question about our services, want to request a
            quote, or provide feedback, our team is ready to assist you!
          </p>
        </section>
      </aside>

      <main className="min-h-[calc(100vh-864px)]">
        {/* addresses */}
        <section
          id="address"
          ref={myRef}
          className=" items-center flex flex-col md:h-72 gap-4 md:flex md:flex-row justify-between p-8"
        >
          <ContactCard
            heading={"Address"}
            text={"BS-0209-9044"}
            icon={<IoLocation size={30} />}
          />
          <ContactCard
            heading={"Email"}
            text={"contact@hergisbridge.com"}
            icon={<MdEmail size={30} />}
          />
          <ContactCard
            heading={"Call us On"}
            text={"+233204188663"}
            icon={<IoCall size={30} />}
          />
          <ContactCard
            heading={"Working Hours"}
            text={"Monday-Friday (7:00 - 17:00)"}
            icon={<HiOfficeBuilding size={30} />}
          />
        </section>
        <section className="  bg-gray-900 text-white p-4 flex justify-center items-center">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
