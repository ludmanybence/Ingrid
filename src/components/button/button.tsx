const variants = {
  default: "bg-zinc-300 text-slate-600 hover:bg-zinc-200",
  primary: "bg-sky-600 text-white hover:bg-sky-500",
  danger: "bg-red-500 text-white hover:bg-red-400",
  warning: "bg-amber-300 text-amber-800 hover:bg-yellow-300",
} as const;

interface Props extends React.ComponentProps<"button"> {
  variant?: keyof typeof variants;
}

const Button = ({ variant = "default", children, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={`px-5 py-3 rounded transition duration-75 ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
