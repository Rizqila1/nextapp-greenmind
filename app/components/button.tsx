import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  variant: "yellow" | string;
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href: string;
};

export const Button: React.FC<Props> = ({
  children,
  variant,
  className,
  onClick,
  href,
}) => {
  function buttonVariant(payload: string) {
    switch (payload) {
      case "yellow":
        return "btn bg-customyellow hover:bg-yellow-500";

      case "white":
        return "btn bg-white hover:bg-gray-100";

      case "secondary":
        return "btn bg-[#EFEFEF] hover:bg-gray-100";

      case "dark":
        return "btn bg-darkblue hover:bg-slate-700";

      case "purple":
        return "btn bg-palmpurple hover:bg-purple-400";

      default:
        return "btn bg-customyellow hover:bg-yellow-500";
    }
  }
  return (
    <Link
      className={`${buttonVariant(variant)} ${variant} ${className}`}
      onClick={() => onClick}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;
