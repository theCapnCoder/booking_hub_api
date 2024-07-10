import { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  dataTestId: string;
}

const Input: FC<InputProps> = ({ label, dataTestId, ...props }) => {
  return (
    <label className={styles.input}>
      {label && <span className={styles.inputHeading}>{label}</span>}
      <input data-test-id={dataTestId} {...props} />
    </label>
  );
};

export default Input;
