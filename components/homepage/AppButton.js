export const AppButton = ({ text, Icon = "", btnType, className }) => {
  return (
    <button className={`${btnType} ${className}`}>
      <span>{Icon}</span>
      <span>{text}</span>
    </button>
  );
};
