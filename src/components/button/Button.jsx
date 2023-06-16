/* eslint-disable react/prop-types */
const Button = ({
  onClick,
  className,
  children,
  full = false,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-3 capitalize ${
        full ? "w-full" : ""
      } ${bgClassName} rounded-lg mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
