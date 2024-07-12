import { FormHTMLAttributes, useRef } from "react";
import Button from "../Button/Button";

import styles from "./Form.module.scss";

interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  textButton: string;
  title?: string;
  onSubmit?: (formData: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({
  textButton,
  title,
  onSubmit,
  children,
  ...props
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    const formValues: Record<string, string> = {};

    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    if (onSubmit) {
      onSubmit(formValues);
    }
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={handlerSubmit}
      {...props}
    >
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
      <Button
        data-test-id="auth-submit"
        className={styles.button}
        type="submit"
      >
        {textButton}
      </Button>
    </form>
  );
};

export default Form;
