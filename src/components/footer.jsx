const date = new Date().getFullYear();

export const Footer = ({ color, textColor }) => {
  return (
    <footer
      className={`${color} ${textColor} p-8 h-auto flex-col justify-center gap-4 md:gap-0 flex`}
    >
      <h2 className="text-xl md:text-3xl font-bold">
        Bringing Your Dreams to Reality.
      </h2>
      <section className="flex flex-col md:flex md:flex-row gap-8 md:gap-0  justify-between w-full  md:p-8">
        {/* navigation */}
        <div className="flex flex-col gap-4">
          <a>Who We Are</a>
          <a>Our Project</a>
          <a>Our Services</a>
          <a>Contact Us</a>
        </div>

        {/* address */}
        <div className="flex flex-col gap-4">
          <p>Premises of Zion Way Church</p>
          <p>Alaska Junction, Sunyani. Ghana</p>
          <p>
            <b>E</b> contact@hergisbridge.com
          </p>
          <p>
            <b>T</b> +233204188663
          </p>
        </div>

        {/* company */}
        <div className="flex flex-col md:w-96 gap-4">
          <p className="font-bold text-2xl">Hergis Bridge</p>
          <p>
            Our Company is a leading civil engineering construction company that
            builds and delivers exceptional infrastructure projects.
          </p>
        </div>
      </section>
      <hr></hr>
      <small className="p-2">Hergis Bridge Limited Company ©{date}</small>
    </footer>
  );
};
