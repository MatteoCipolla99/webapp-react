export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) {
  const baseStyle =
    "rounded-md transition-all font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const variants = {
    primary: "bg-red-700 hover:bg-red-600 text-white focus:ring-red-500",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-500",
    outline:
      "border border-red-700 text-red-700 hover:bg-red-50 focus:ring-red-500",
  };

  const sizes = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
