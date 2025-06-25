import { data, Link, useNavigate } from "react-router-dom";
import { asset, testimonieData } from "../assets/asset";

const Home = () => {
  const navigate = useNavigate();

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
          action=""
          className="flex-col flex sm:w-[500px] w-[360px]  p-2 bg-green-50 rounded-2xl shadow-2xl mt-2 gap-3"
        >
          <input
            type="text"
            placeholder="Name..."
            required
            className="border border-green-600/50 rounded-md p-2"
          />
          <input
            type="email"
            placeholder="Email..."
            required
            className="border border-green-600/50 rounded-md p-2"
          />
          <input
            type="tel"
            placeholder="Phone..."
            required
            className="border border-green-600/50 rounded-md p-2"
          />
          <textarea
            name=""
            id=""
            placeholder="Enter Message..."
            required
            className="border h-[100px] border-green-600/50 rounded-md p-2"
          ></textarea>
          <button
            type="submit"
            className="bg-green-800 w-[60%] m-auto py-1 text-white font-bold rounded-md "
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
