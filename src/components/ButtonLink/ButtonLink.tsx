import React, { AnchorHTMLAttributes } from "react";

import styles from "./ButtonLink.module.scss";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, ...props }) => {
  return (
    <a {...props} className={styles.buttonLink}>
      {children}
    </a>
  );
};

export default ButtonLink;
