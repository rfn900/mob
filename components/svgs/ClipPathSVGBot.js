export default function ClipPathSVGBot({ fill, className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill={fill}
        fillOpacity="1"
        d="M0,224L80,229.3C160,235,320,245,480,240C640,235,800,213,960,224C1120,235,1280,277,1360,298.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  );
}
