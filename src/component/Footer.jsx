import { Link, useNavigate } from "react-router-dom";
import { asset } from "../assets/asset";

const Footer = () => {
  const phone = "update-later...";
  const location = "201 louis ST, Toronto, ON M5G 2C4, Canada";
  const email = "handquarterscancerhope@gmail.com";

  const navigate = useNavigate();

  return (
    <footer className="bg-green-50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t pt-10">
        {/* Left - Navigation Links */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold text-green-800">Quick Links</h3>
          <ul className="flex flex-col gap-1 text-sm text-gray-700">
            <li>
              <p
                onClick={() => {
                  navigate("/");
                  scrollTo(0, 0);
                }}
                className="hover:underline"
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/about");
                  scrollTo(0, 0);
                }}
                className="cursor-pointer not-only-of-type:hover:underline"
              >
                About Us
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("service");
                  scrollTo(0, 0);
                }}
                className="cursor-pointer hover:underline"
              >
                Clinical Trials
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("faq");
                  scrollTo(0, 0);
                }}
                className="cursor-pointer hover:underline"
              >
                FAQs
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("service");
                  scrollTo(0, 0);
                }}
                className="cursor-pointer hover:underline"
              >
                Cure Drugs
              </p>
            </li>
          </ul>
        </div>

        {/* Center - Logo/Image */}
        <div className="flex-shrink-0">
          <img
            src={asset.logo} // Replace with your image path
            alt="Cancer Hope Logo"
            className="w-60 h-auto object-contain"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-4 text-center md:text-right">
          <h3 className="text-lg font-semibold text-green-800">Contact Us</h3>
          <div className="text-sm text-gray-700">
            <p className="font-medium">Phone:</p>
            <p>{phone}</p>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-medium">Email:</p>
            <p>{email}</p>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-medium">Location:</p>
            <p>{location}</p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-green-700">
        CancerHopeOrganization © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
