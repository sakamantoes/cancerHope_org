import { useParams } from "react-router-dom";
import { testimonieData } from "../assets/asset";

const Testimonies = () => {
  const { id } = useParams();
  const testimony = testimonieData.find((item) => item.id === Number(id));

  if (!testimony) {
    return <h2>testimony not exiting</h2>;
  }

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl px-6 pt-[50px] max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          {testimony.name}
        </h1>{" "}
        <img
          src={testimony.img}
          alt={testimony.name}
          className="w-full max-h-[400px] object-cover rounded-lg mx-auto"
        />
        <p className="text-gray-700 text-lg mb-6">{testimony.text}</p>
      </div>
    </div>
  );
};

export default Testimonies;
