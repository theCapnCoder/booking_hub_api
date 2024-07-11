import { FC, FormHTMLAttributes, useRef } from "react";

import styles from "./Form.module.scss";
import Button from "../Button/Button";

interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  title: string;
  textButton: string;
  onSubmit?: (formData: Record<string, string>) => void;
}

const Form: FC<FormProps> = ({
  title,
  textButton,
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
      console.log(value, key);
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
      <h2 className={styles.title}>{title}</h2>
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
