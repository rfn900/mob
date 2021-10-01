export default function AnimatedMenuIcon({ className, onClick, menuOpen }) {
  return (
    <div onClick={onClick} className={className}>
      <div
        className={`w-8 h-1 bg-indigo-900 rounded ${
          menuOpen
            ? "transform -rotate-37 transition duration-500 origin-top-right"
            : "transform rotate-0 transition duration-500 origin-top-right"
        }`}
      ></div>
      <div
        className={`w-5 h-1 bg-indigo-900 rounded ${
          menuOpen
            ? "transform opacity-0 transition duration-500"
            : "transform opacity-100 transition duration-500"
        }`}
      ></div>
      <div
        className={`w-8 h-1 bg-indigo-900 rounded ${
          menuOpen
            ? "transform rotate-37 transition duration-500 origin-bottom-right"
            : "transform rotate-0 transition duration-500 origin-bottom-right"
        }`}
      ></div>
    </div>
  );
}
