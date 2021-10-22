export default function Highlight({ children, classes = "" }) {
  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 z-0 w-full bg-yellow-300 h-2/5 top-1/2 left-5 ${classes}`}
      />
    </span>
  );
}
