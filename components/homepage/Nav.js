import { MenuIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
      });
  });

  return (
    <div
      className={`fixed top-0 z-10 flex items-center transition duration-300 justify-center w-screen m-auto p-6 sm:px-16 ${
        scrolled ? "bg-white bg-opacity-95" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex items-center">
          <span className="text-4xl font-bold font-display font-body">MOG</span>
          <svg
            className="w-5 h-5 text-indigo-800 w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="justify-between hidden m-auto text-xl w-96 lg:flex">
          <div className="min-w-max">
            <a href="">Services</a>
          </div>
          <div className="min-w-max">
            <a href="">Assets</a>
          </div>
          <div className="min-w-max">
            <a href="">About Us</a>
          </div>
        </div>
        <div className="hidden lg:flex">
          <button className="btn-secondary">Contact Us</button>
        </div>
        <MenuIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 w-8 h-8 cursor-pointer text-myblue lg:hidden"
        />
      </div>
      <div
        className={`fixed top-0 -left-0 z-40 transform transition duration-700 w-screen h-screen bg-green-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </div>
  );
}

export default Nav;
