import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.btn, className, {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
