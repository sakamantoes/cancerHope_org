import { data, Link, useNavigate } from "react-router-dom";
import { asset, testimonieData } from "../assets/asset";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const HandleSubmit = () => {
    e.preventDefault();
    // connection to email js
    const serviceId = "service_4rqgg5f";
    const templateId = "template_ijk6jjs";
    const puplicKey = "urfLvmDkSxJNikvbo";

    // create an object
    const templateParams = {
      from_name: name,
      from_email: email,
      form_phone: phone,
      to_name: "C.H.O",
      message: message,
    };

    // send email using email js
    emailjs
      .send(serviceId, templateId, templateParams, puplicKey)
      .then((response) => {
        console.log("email sent sucessfully", response);
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
      })
      .catch((error) => {
        console.log("error sending email", error);
      });
  };
  return (
    <>
      {/* hero page */}
      <div className="sm:h-[100vh] h-[60vh] flex items-center justify-center sm:flex-row flex-col sm:px-3 sm:py-2 ">
        <div className="flex flex-col gap-7 sm:w-1/2 w-full mr-3.5 px-3.5 sm:text-left text-center pt-15 sm:pt-0">
          <p className="text-4xl font-bold leading-10 text-green-700 ">
            Bringing Cancer Clinical Trial and Cure Closer to Your Reach
          </p>
          <p className="font-semebold sm:text-[18px] text-gray-600">
            A statewide alliance offering access to cutting-edge cancer research
            prevention, treatment, and care right in your community.
          </p>
          <div className="flex items-center justify-center sm:block gap-7 ">
            <button className="bg-green-700 text-white py-1 px-3.5 rounded-2xl cursor-pointer">
              Explore site
            </button>

            <a
              href="https://t.me/drcanserfree"
              target="blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="bg-transparent text-green-700 border border-green-700 py-1 px-3.5 rounded-2xl sm:ml-5 cursor-pointer">
                purchase Drugs
              </button>
            </a>
          </div>
        </div>

        <div className="h-[450px] rounded-sm overflow-hidden sm:w-1/2 w-[300px] p] mt-1.5 ">
          <img src={asset.doctor} alt="" className="w-full" />
        </div>
      </div>

      {/* what about */}
      <div className="bg-green-50 sm:h-[70vh] h-[40vh] sm:px-3 py-4 flex sm:items-center sm:justify-center my-[90px]">
        <div className="flex justify-center items-center sm:w-full w-[400px] ">
          {/* about image */}
          <div className="sm:flex rounded-sm overflow-hidden hidden sm:w-1/2 w-[300px] mr-3">
            <img src={asset.diagnosis} alt="" className="w-full" />
          </div>
          {/* write up */}
          <div className="sm:w-1/2 flex flex-col gap-2 ml-3.5 ">
            <p className="sm:text-3xl text-3xl font-bold text-green-700 sm:text-left text-center">
              Who Are We
            </p>
            <p className="text-gray-700 text-[15px] sm:w-[450px] sm:text-left text-center">
              Cancer Hope Organization (C.H.O.) is a statewide collaboration
              committed to advancing cancer care, support, and treatment through
              medical innovation, clinical research, and compassionate guidance.
              Established in 2002, C.H.O. was founded on the belief that every
              individual facing cancer deserves access to current and evolving
              methods of treatment and recovery. Our core mission is to ensure
              that the latest approaches in cancer therapy and oncology research
              are accessible and utilized effectively.{" "}
            </p>
            <div className="flex max-sm:justify-center">
              <button
                onClick={() => {
                  navigate("/about");
                  scrollTo(0, 0);
                }}
                className="border border-green-700 px-2 py-1 rounded-md cursor-pointer"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* option-area */}
      <div className="my-[100px] h-auto flex items-center justify-center flex-col gap-8">
        <p className="text-green-700 text-3xl font-bold">MAKE OPTION</p>

        {/* Cards Section */}
        <div className="flex flex-wrap items-center justify-center gap-7">
          {/* Card 1 */}
          <div className="h-auto bg-green-100 w-[300px] rounded-2xl shadow-lg p-4 flex flex-col items-center text-center">
            <img
              src={asset.operate2}
              alt="Option"
              className="rounded-xl w-full h-[150px] object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Clinical Treatment</h2>
            <a
              href="https://t.me/drcanserfree"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Apply now
            </a>
          </div>

          {/* Card 2 (Optional Copy) */}
          <div className="h-auto bg-green-100 w-[300px] rounded-2xl shadow-lg p-4 flex flex-col items-center text-center">
            <img
              src={asset.patient}
              alt="Option"
              className="rounded-xl w-full h-[150px] object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Drugs and Meds</h2>
            <a
              href="https://t.me/drcanserfree"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Apply now
            </a>
          </div>
        </div>
      </div>

      {/* testimonie */}
      <div className="bg-green-50 py-7 my-[50px]">
        <p className="text-center text-3xl font-bold text-green-700">
          Testimony
        </p>
        <div className="flex sm:h-[40vh] h-[50vh] overflow-x-scroll snap-mandatory items-center gap-8 p-3 mt-4">
          {testimonieData.slice(0, 3).map(({ id, lText, name, img }, index) => (
            <div
              key={index}
              className="bg-white/60 rounded-2xl w-[500px] shadow-md sm:h-auto h-[400px] items-center justify-center flex p-5"
            >
              <div className="flex items-center justify-start gap-2.5 p-4 max-md:flex-col">
                <div className="w-[160px] sm:m-3 h-[160px] overflow-hidden rounded-full">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[300px] flex flex-col gap-2 max-md:text-center sm:m-1">
                  <p className="text-2xl text-green-700">{name}</p>
                  <p className="text-[14px] text-gray-600">{lText}</p>{" "}
                  <Link
                    onClick={scrollTo(0, 0)}
                    to={`/testimonie/${id}`}
                    className="text-green-500 text-[13px]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* contact */}
      <div className="flex items-center mb-[60px] justify-center flex-col">
        <p className="text-3xl text-green-700 font-bold">Contact</p>
        <form
          action="https://usebasin.com/f/5529e87fd7f1"
          method="POST"
          id="form"
          className="w-[500px] max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label
              htmlFor="number"
              className="block mb-1 font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
