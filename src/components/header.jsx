import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "../assets/hpics/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Header = ({ myElementIsVisible }) => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const routeName = segments.length > 0 ? segments.pop() : "home";
  const [homeLinkActive, setHomeLinkActive] = useState(false);
  const [serviceLinkActive, setServiceLinkActive] = useState(false);
  const [aboutLinkActive, setAboutLinkActive] = useState(false);

  useEffect(() => {
    if (routeName === "home") {
      setHomeLinkActive(true);
    }
    if (routeName === "services") {
      setServiceLinkActive(true);
    }
    if (routeName === "about") {
      setAboutLinkActive(true);
    }
  }, [routeName]);

  const [open, setOpen] = useState(false);
  return (
    <header
      className={
        myElementIsVisible
          ? `sticky top-0 z-50 h-auto bg-white transition-all ease-in duration-100 flex md:block justify-between items-center `
          : `sticky top-0 z-50 h-auto bg-gray-50 transition-all ease-in duration-100 flex justify-between items-center md:block `
      }
    >
      {/* heading navs */}
      <nav className="flex justify-between p-4 items-center">
        {/* logo and name */}
        <div className="flex items-center ">
          <img src={logo} alt="HBL" className=" h-8 bg-center bg-cover" />
          <h1 className="font-bold">Hergis Bridge Company Limited</h1>
        </div>

        {/* site links */}
        <ul className="hidden md:flex justify-between items-center w-full max-w-lg font-medium">
          <li>
            <a
              href="/"
              className={
                homeLinkActive
                  ? "hover:text-amber-400 text-amber-600 duration-100 transition-all ease-in"
                  : "hover:text-amber-400 duration-100 transition-all ease-in"
              }
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className={
                aboutLinkActive
                  ? "hover:text-amber-400 text-amber-600 duration-100 transition-all ease-in"
                  : "hover:text-amber-400 duration-100 transition-all ease-in"
              }
            >
              Who We Are
            </a>
          </li>

          <li>
            <a
              href="/services"
              className={
                serviceLinkActive
                  ? "hover:text-amber-400 text-amber-600 duration-100 transition-all ease-in"
                  : "hover:text-amber-400 duration-100 transition-all ease-in"
              }
            >
              Our Services
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61576540560890#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 duration-100 transition-all ease-in"
            >
              <FaFacebook color="blue" />
            </a>
          </li>
        </ul>

        <a
          href="/contact"
          className="hidden whitespace-nowrap p-2 md:flex items-center bg-blue-500 rounded-3xl font-medium gap-2 text-white"
        >
          <small>Contact Us</small>
          <FaLongArrowAltRight className=" hover:motion-translate-x-in-25" />
        </a>
      </nav>

      {/* hamburger */}
      <div className="md:hidden">
        {/* Hamburger icon */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-black p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu drawer */}
        {open && (
          <div className="fixed left-0 h-[100vh] w-full bg-white shadow-md z-50 p-12 -motion-translate-x-in-100">
            <nav className="flex flex-col items-center text-3xl justify-between gap-10 py-8 font-medium ">
              <a to="/" className=" text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a to="/about" className=" text-gray-800 hover:text-gray-600">
                Who We Are
              </a>
              <a to="/services" className=" text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a to="/contact" className=" text-gray-800 hover:text-gray-600">
                Our Contact
              </a>
            </nav>
          </div>
        )}

        {!open && (
          <div className="fixed left-0 h-[100vh] w-full bg-white shadow-md z-50 p-12 motion-translate-x-out-100">
            <nav className="flex flex-col items-center text-3xl justify-between gap-10 py-8 font-medium ">
              <a to="/" className=" text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a to="/about" className=" text-gray-800 hover:text-gray-600">
                Who We Are
              </a>
              <a to="/services" className=" text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a to="/Contact" className=" text-gray-800 hover:text-gray-600">
                Our Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export const HeaderForServices = ({ myElementIsVisible }) => {
  const location = useLocation();
  const routeName = location.pathname.split("/").filter(Boolean).pop();
  const [homeLinkActive, setHomeLinkActive] = useState(false);
  const [serviceLinkActive, setServiceLinkActive] = useState(false);
  const [aboutLinkActive, setAboutLinkActive] = useState(false);

  useEffect(() => {
    if (routeName === "/") {
      setHomeLinkActive(true);
    }
    if (routeName === "services") {
      setServiceLinkActive(true);
    }
    if (routeName === "about") {
      setAboutLinkActive(true);
    }
  }, [routeName]);

  const [open, setOpen] = useState(false);
  return (
    <header
      className={
        myElementIsVisible
          ? `h-auto fixed top-0 left-0 w-full z-50 bg-transparent text-white transition-all ease-out duration-300 md:block justify-between items-center flex`
          : `h-auto fixed top-0 left-0 w-full z-50 bg-white text-black transition-all ease-in duration-300 md:block flex items-center`
      }
    >
      <nav className="flex justify-between p-4 items-center">
        {/* logo */}
        <div className="flex items-center">
          <img src={logo} alt="HBL" className="h-8 bg-center bg-cover" />
          <h1 className="font-bold">Hergis Bridge Company Limited</h1>
        </div>

        {/* nav links */}
        <ul className="hidden md:flex justify-between w-full items-center max-w-lg font-medium">
          <li>
            <a
              href="/"
              className={
                homeLinkActive
                  ? "hover:text-amber-50 text-blue-600 duration-100 transition-all ease-in"
                  : "hover:text-blue-600 duration-100 transition-all ease-in"
              }
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className={
                aboutLinkActive
                  ? "hover:text-amber-50 text-blue-600 duration-100 transition-all ease-in"
                  : "hover:text-blue-600 duration-100 transition-all ease-in"
              }
            >
              Who We Are
            </a>
          </li>

          <li>
            <a
              href="/services"
              className={
                serviceLinkActive
                  ? "hover:text-amber-400 text-amber-300 duration-100 transition-all ease-in"
                  : "hover:text-amber-400 duration-100 transition-all ease-in"
              }
            >
              Our Services
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61576540560890#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 duration-100 transition-all ease-in"
            >
              <FaFacebook color={myElementIsVisible ? "white" : "blue"} />
            </a>
          </li>
        </ul>

        <a
          href="/contact"
          className="hidden whitespace-nowrap p-2 md:flex items-center bg-blue-500 rounded-3xl font-medium gap-2 text-white"
        >
          <small>Contact Us</small>
          <FaLongArrowAltRight />
        </a>
      </nav>

      {/* hamburger */}
      <div className="md:hidden">
        {/* Hamburger icon */}
        <button
          onClick={() => setOpen(!open)}
          className={
            open
              ? `text-3xl text-black p-2 relative z-50 focus:outline-none cursor-pointer`
              : myElementIsVisible
              ? `text-3xl text-white p-2 relative z-50 focus:outline-none cursor-pointer`
              : `text-3xl text-black p-2 relative z-50 focus:outline-none cursor-pointer`
          }
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu drawer */}
        {open && (
          <div className="fixed left-0 top-0 h-[100vh] w-full bg-white shadow-md z-20 p-12 -motion-translate-x-in-100">
            <nav className="flex flex-col items-center text-3xl justify-between gap-10 py-8 font-medium ">
              <a to="/" className=" text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a to="/about" className=" text-gray-800 hover:text-gray-600">
                Who We Are
              </a>
              <a to="/services" className=" text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a to="/contact" className=" text-gray-800 hover:text-gray-600">
                Contact Us
              </a>
            </nav>
          </div>
        )}

        {!open && (
          <div className="fixed left-0 top-0 h-[100vh] w-full bg-white shadow-md z-50 p-12 motion-translate-x-out-100 opacity-0">
            <nav className="flex flex-col items-center text-3xl justify-between gap-10 py-8 font-medium ">
              <a to="/" className=" text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a to="/about" className=" text-gray-800 hover:text-gray-600">
                Who We Are
              </a>
              <a to="/services" className=" text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a to="/services" className=" text-gray-800 hover:text-gray-600">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
