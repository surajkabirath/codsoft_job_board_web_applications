import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLETE_ID = import.meta.env.VITE_TEMPLETE_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;

  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLETE_ID, form.current, USER_ID)
      .then((e) => {
        e.target.reset();
        toast.success("Thank you for your inquery.");
      }),
      (error) => {
        console.log(error.text);
        toast.error("opps!! something went wrong.");
      };
  };
  return (
    <>
      {" "}
      <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center" id="contact">
        Connect With Us
      </h2>
      <section className="text-gray-600 body-font relative  bg-gray-300" >
        <div className=" max-w-screen-xl mx-auto absolute inset-0 bg-gray-300 mb-5">
          <iframe
            width="100%"
            height="100%"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="container px-5 py-24 max-w-screen-xl mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              For More Details
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">Contact us</p>
            <form ref={form} onSubmit={handleSendEmail}>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Full Name: "
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  required
                  placeholder="Message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
