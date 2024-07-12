import { ReactNode } from "react";

import styles from "./FormLayout.module.scss";

interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return <section className={styles.formLayout}>{children}</section>;
};

export default FormLayout;
