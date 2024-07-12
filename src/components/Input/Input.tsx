import { InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  dataTestId: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  dataTestId,
  error,
  ...props
}) => {
  return (
    <label className={styles.input}>
      {label && <span className={styles.inputHeading}>{label}</span>}
      <input data-test-id={dataTestId} {...props} />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </label>
  );
};

export default Input;
