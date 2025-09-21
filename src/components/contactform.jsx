import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LiaUser } from "react-icons/lia";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

export const ContactForm = () => {
  const publickey = "WiBnRQOkWJzQWNVd-";
  const templateid = "template_qtaiwk8";
  const serviceid = "service_jjs42ow";

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        serviceid,
        templateid,
        form.current,
        {
          publicKey: publickey,
        }
      );
      alert("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      alert("❌ Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col items-center text-sm text-white"
    >
      <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
        Contact Us
      </p>
      <h2 className="text-4xl font-bold py-4 text-center">
        Let’s Get In Touch.
      </h2>
      <p className="max-md:text-sm text-gray-500 pb-10 text-center">
        Or just reach out manually to us at{" "}
        <a
          href="mailto:contact@hergisbridge.com"
          className="text-indigo-600 hover:underline"
        >
          contact@hergisbridge.com
        </a>
      </p>

      <div className="max-w-96 w-full px-4 gap-4 flex flex-col">
        <label htmlFor="name" className="font-medium">
          Full Name
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <LiaUser />
          <input
            type="text"
            name="name"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* phone number */}
        <label htmlFor="phone" className="font-medium mt-4">
          Phone Number
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <MdOutlinePhone />
          <input
            type="tel"
            name="phone"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="+233501234567" // Example with country code
            required
          />
        </div>

        {/* email */}
        <label htmlFor="email-address" className="font-medium mt-4">
          Email Address
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <MdOutlineMailOutline />
          <input
            type="email"
            name="email"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* message */}
        <label htmlFor="message" className="font-medium mt-4">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
          placeholder="Enter your message"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-1 mt-5 cursor-pointer ${
            loading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          } text-white py-2.5 w-full rounded-full transition`}
        >
          {loading ? "Sending..." : "Submit Form"}
          {!loading && (
            <svg
              className="mt-0.5"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                fill="#fff"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};
