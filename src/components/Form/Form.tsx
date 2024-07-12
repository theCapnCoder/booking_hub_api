import { FormHTMLAttributes, useRef } from "react";

import styles from "./Form.module.scss";

interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  title?: string;
  onSubmit?: (formData: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({ title, onSubmit, children, ...props }) => {
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
    </form>
  );
};

export default Form;
