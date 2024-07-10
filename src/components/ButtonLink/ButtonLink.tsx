import React, { AnchorHTMLAttributes } from "react";

import styles from "./ButtonLink.module.scss";
import clsx from "clsx";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a {...props} className={clsx(styles.buttonLink, className)}>
      {children}
    </a>
  );
};

export default ButtonLink;
