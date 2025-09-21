import { FaHandshake } from "react-icons/fa";
import { Header } from "../components/header.jsx";
import { GiBrickWall } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi2";
import { Footer } from "../components/footer.jsx";
import hero from "../assets/hpics/flyer.jpg";
import dedication from "../assets/hpics/100.jpg";
import excellence from "../assets/hpics/300.jpg";
import { ContactForm } from "../components/contactform.jsx";
import { SEO } from "../components/seo.jsx";

const About = () => {
  const pageLink = "about";
  const pageTitle = "About | Hergis Bridge Limited Company";
  const pageDescription =
    "Hergis Bridge Limited Company is a multi-service construction and engineering firm in Sunyani, Ghana. We deliver roads, railways, building construction, civil works, real estate development, vehicle sales, electrical & plumbing installations, CCTV installations, site preparation and more. Your Dream, Our Concern.";

  return (
    <>
      <SEO
        pageDescription={pageDescription}
        pageLink={pageLink}
        pageTitle={pageTitle}
      />

      <Header />

      {/* about */}
      <section className="h-auto md:h-[26rem] bg-gray-50 p-8 flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-3xl">Who We Are</h2>
        <p className=" md:w-2/4 text-center">
          Welcome to Hergis Bridge Company Limited, a trusted Ghanaian
          construction firm dedicated to delivering excellence in every project.
          Guided by a commitment to quality and innovation, we take pride in
          transforming client visions into enduring realities. At Hergis Bridge,
          our focus is on you, your goals, your dreams, and the spaces you want
          to create. We believe strong relationships are the foundation of
          success, which is why many of our clients return to us for multiple
          projects. From residential homes to commercial spaces, we ensure that
          every build reflects durability, precision, and lasting value. With a
          reputation for integrity, craftsmanship, and reliability, Hergis
          Bridge Company Limited stands as a dependable partner in the Ghanaian
          construction industry. Let us work with you to shape structures that
          inspire confidence and stand the test of time
        </p>
      </section>

      {/* image */}
      <aside
        style={{ backgroundImage: `url(${hero})` }}
        className=" h-96 relative bg-cover bg-center"
      ></aside>

      <main>
        {/* dedication */}
        <section className="md:flex md:flex-row p-8 md:h-96 justify-between items-center">
          <div className="flex flex-col gap-4 max-w-lg w-full ">
            <h2 className="font-bold text-xl md:text-2xl">
              Dedication, Experience and a Passion for Perfection
            </h2>
            <p className=" text-justify">
              At Hergis Bridge Company Limited, our foucus is on YOU and what
              YOU want to achieve. We pride ourselves on forging strong, lasting
              relationships, which help us to continue to thrive and develop.
            </p>
            <p className=" text-justify">
              Our desire to work closely with those who share the same vision
              and values is why many of our clients have a multiple project
              history. Exceeding client expectations has resulted in continual
              repeat business within the local area, which means we are building
              a foundation not only for our business but also four our
              community.
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${dedication})` }}
            className="h-64 max-w-lg w-full bg-center bg-cover bg-red-500"
          ></div>
        </section>

        {/* quotes */}
        <section className="p-8 ">
          <div className="bg-gray-800 text-slate-300 h-auto md:h-96 justify-center flex flex-col gap-10 w-full p-8 rounded-4xl">
            <h2 className="text-3xl md:text-5xl">
              We <b>Work</b> with <b>Passion</b>
            </h2>
            <div className="flex justify-between divide-x-[1px] md:divide-x-0 gap-2 duration-100 transition-all ease-in">
              {/* built */}
              <div>
                <FaHandshake size={50} />
                <h3 className="font-medium text-sm md:text-xl">
                  Built on Trust
                </h3>
                <small>
                  Strong relationships with clients are the foundation of our
                  success
                </small>
              </div>
              {/* strength */}
              <div>
                <GiBrickWall size={50} />
                <h3 className="font-medium text-sm md:text-xl">
                  Strength in Every Brick
                </h3>
                <small>
                  Quality construction materials for lasting results success
                </small>
              </div>
              {/* innovation */}
              <div>
                <HiLightBulb size={50} />
                <h3 className="font-medium text-sm md:text-xl">
                  Innovation at Work
                </h3>
                <small>
                  Modern methods and expertise to deliver beyond expectations
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* excellence */}
        <section className="md:flex md:flex-row p-8 h-auto md:h-96 justify-between items-center">
          <div className="flex flex-col gap-4 max-w-lg w-full ">
            <h2 className="font-bold text-xl md:text-2xl">
              Excellence in Every Detail
            </h2>
            <p className=" text-justify">
              At Hergis Bridge Company Limited, excellence isn’t just a
              goal—it’s the standard we live by. From concept to completion,
              every project reflects our dedication to precision, strength, and
              craftsmanship. We build not only structures but also confidence,
              ensuring that every element stands the test of time.
            </p>
            <p className=" text-justify">
              To us, excellence goes beyond appearance. It’s about creating
              solutions that work seamlessly, inspire those who use them, and
              stand firm in both form and function. With every project, we
              demonstrate that when integrity and skill come together, the
              results speak for themselves.
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${excellence})` }}
            className="h-64 max-w-lg w-full bg-center bg-cover bg-red-500"
          ></div>
        </section>

        {/* enquire */}
        <section className=" bg-gray-900 text-white p-8 flex justify-center">
          <ContactForm />
        </section>
      </main>
      <Footer color={"bg-gray-100"} textColor={"text-slate-800"} />
    </>
  );
};

export default About;
