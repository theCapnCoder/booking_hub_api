import { FC, FormHTMLAttributes } from "react";

import styles from "./Form.module.scss";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  textButton: string;
}

const Form: FC<FormProps> = ({ title, textButton, children, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <button
        data-test-id="auth-submit"
        className={styles.button}
        type="submit"
      >
        {textButton}
      </button>
    </form>
  );
};

export default Form;
