import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-50 h-[30vh] py-16 px-4 sm:px-6 lg:px-24 justify-center items-center flex flex-col gap-1">
      <h1 className="text-green-700 font-bold text-2xl">
        this page does not exit...
      </h1>
      <Link to="/" className="text-purple-700">
        go back to HOME PAGE
      </Link>
    </div>
  );
};

export default NotFound;
