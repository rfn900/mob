export const AppButton = ({
  text,
  Icon = "",
  btnType,
  className = "",
  action,
}) => {
  return (
    <button onClick={action} className={`${btnType} ${className}`}>
      <span>{Icon}</span>
      <span>{text}</span>
    </button>
  );
};
