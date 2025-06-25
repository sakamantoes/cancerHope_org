import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { asset } from "../assets/asset";

const Nav = () => {
  const [isopen, setIsopen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isopen) {
      document.body.classList.add = "noScroll";
    } else {
      document.body.classList.remove = "noScroll";
    }
  }, [isopen]);

  useEffect(() => {
    const handreSize = () => {
      if (window.innerWidth >= 768) {
        setIsopen(false);
      }
    };

    window.addEventListener("resize", handreSize);
    return () => {
      window.removeEventListener("resize", handreSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  return (
    <div className="fixed  w-full top-0 left-0 bg-white shadow-sm">
      <nav className="max-w-[1020px] h-[55px] m-auto flex justify-between text-sm items-center px-3 py-3">
        {/* logo */}
        <div>
          {" "}
          <img src={asset.logo} alt="" className="w-[80px]" />{" "}
        </div>

        {/* icons */}
        {!isopen && (
          <div
            onClick={() => toggleMenu()}
            className=" cursor-pointer sm:hidden block"
          >
            <div className="flex items-center flex-col justify-center gap-1">
              <div className="bg-green-900 h-[3px] w-6"></div>
              <div className="bg-green-900 h-[3px] w-6"></div>
              <div className="bg-green-900 h-[3px] w-6"></div>
            </div>
          </div>
        )}

        {/* mobile */}
        {isopen ? (
          <div className="bg-white overflow-y-hidden fixed z-20 top-0 left-0 w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-400 ease-in">
            {isopen && (
              <div
                onClick={() => toggleMenu()}
                className="cursor-pointer bg-green-400 rounded-sm text-white py-1 px-4 font-bold"
              >
                <p>close</p>
              </div>
            )}
            <ul className="flex items-center justify-center font-bold text-xl flex-col gap-6">
              <NavLink onClick={() => setIsopen(false)} to="/">
                <li onClick={() => scrollTo(0, 0)} className="py-1">
                  Home
                </li>
                <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
              </NavLink>

              <NavLink onClick={() => setIsopen(false)} to="/about">
                <li onClick={() => scrollTo(0, 0)}>About</li>
                <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
              </NavLink>

              <NavLink onClick={() => setIsopen(false)} to="/contact">
                <li onClick={() => scrollTo(0, 0)}>Contact</li>
                <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
              </NavLink>

              <NavLink onClick={() => setIsopen(false)} to="/service">
                <li onClick={() => scrollTo(0, 0)}>Service</li>
                <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
              </NavLink>
            </ul>
          </div>
        ) : (
          <div className="bg-white overflow-y-hidden fixed z-20 top-0 left-[-150%] w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-400 ease-in"></div>
        )}

        {/* links */}
        <ul className="sm:flex items-center justify-center gap-6 hidden text-[15px] font-semibold ">
          <NavLink to="/">
            <li onClick={() => scrollTo(0, 0)} className="py-1">
              Home
            </li>
            <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
          </NavLink>

          <NavLink to="/about">
            <li onClick={() => scrollTo(0, 0)}>About</li>
            <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
          </NavLink>

          <NavLink to="/contact">
            <li onClick={() => scrollTo(0, 0)}>Contact</li>
            <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
          </NavLink>

          <NavLink to="/service">
            <li onClick={() => scrollTo(0, 0)}>Service</li>
            <hr className="hidden border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto" />
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
