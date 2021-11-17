export default function AnimatedMenuIcon({ className, onClick, menuOpen }) {
  return (
    <div onClick={onClick} className={className}>
      <div
        className={`absolute transform w-8 h-0.5 bg-indigo-900 transition duration-500 origin-center rounded ${
          menuOpen ? "translate-y-0 -rotate-45" : "-translate-y-2.5"
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-indigo-900 rounded transform transition duration-500 ${
          menuOpen ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`absolute transform w-8 h-0.5 bg-indigo-900 transition duration-500 origin-center rounded ${
          menuOpen ? "translate-y-0 rotate-45" : "translate-y-2.5"
        }`}
      ></div>
    </div>
  );
}
