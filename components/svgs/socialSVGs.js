export function FacebookSVG({ stroke = "#000", className }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 19"
    >
      <path
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.89,21V13.25H7V9.94H9.89c0-3.52,0-7.86,7.11-6.77V6c-3.08-.33-3.38.62-3.38,3.9H17l-.68,3.31h-2.7V21"
        transform="translate(-6.5 -2.5)"
      />
    </svg>
  );
}

export function LinkedInSVG({ stroke = "#000", className }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 17"
    >
      <path
        fill="none"
        strokeWidth="1.4"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5,6.91C2.38,5.72,3.24,4,5.15,4S7.62,6.13,6.84,7.68C6.21,8.93,4.35,9.35,3.5,9.4V20H9.18V9H12.9v1.8C15.5,7.68,21,8.62,21,13v7H17.1V14.52c0-2.5-1.12-3-2.4-2.5s-1.8,1.43-1.8,3.32V20"
        transform="translate(-2.5 -3.5)"
      />
    </svg>
  );
}
export function InstagramSVG({ stroke = "#000", className }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
    >
      <path
        fill="none"
        strokeWidth="1.4"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18,6.68c0,.82-1.13,1.43-2,.32-.5-.64-.32-2.57,2-2.53a2.91,2.91,0,0,1,3,2.85v7.55c0,4.55-3.23,6-4.84,6.13H8.32A5,5,0,0,1,3,16.14V8.69C3,4.26,6,3.05,7.45,3h7.07c-2.31,1-7.21,3.07-7.07,8s5,6.42,7.07,4.32,1-6.67-2.52-6.67"
        transform="translate(-2.5 -2.5)"
      />
    </svg>
  );
}
