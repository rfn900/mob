import { MenuIcon } from "@heroicons/react/solid";
function Nav() {
  return (
    <div
      className="fixed flex z-50 items-center justify-between bg-white bg-opacity-75 top-0 
      inset-x-0 px-12 py-8 m-auto text-gray-700 max-w-10xl space-x-4 
      lg:justify-around"
    >
      <div className="relative flex items-center">
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
        {/*<span className="w-8 h-8 mx-2 bg-red-900 rounded-full"></span>*/}
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
      <MenuIcon className="w-8 h-8 text-myblue lg:hidden" />
    </div>
  );
}

export default Nav;
