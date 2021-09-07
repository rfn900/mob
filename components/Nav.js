import { MenuIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(menuOpen);
  });

  return (
    <div className="fixed top-0 z-10 flex items-center justify-center w-screen h-20 px-6 m-auto bg-transparent sm:px-12">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex items-center">
          <span className="text-4xl font-bold font-display font-body">MOG</span>
          <svg
            className="text-indigo-800 w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
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
          <button className="btn-indigo">Contact Us</button>
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
