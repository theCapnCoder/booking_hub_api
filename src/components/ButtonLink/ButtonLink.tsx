import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./ButtonLink.module.scss";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  children,
  className,
  ...props
}) => {
  return (
    <Link to={to} className={clsx(styles.buttonLink, className)} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
