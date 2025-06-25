import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div>
      <div className="h-[70vh] flex justify-center items-center flex-col">
        {" "}
        <p>
          {" "}
          thank you your message is been delivered click to go back to the
        </p>{" "}
        <Link to="/" className="text-green-700 font-bold">
          {" "}
          home page
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
