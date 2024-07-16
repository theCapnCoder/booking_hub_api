import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./ButtonLink.module.scss";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={clsx(styles.buttonLink, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
