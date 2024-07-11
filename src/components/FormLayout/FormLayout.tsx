import { FC, ReactNode } from "react";

import styles from "./FormLayout.module.scss";

interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: FC<FormLayoutProps> = ({ children }) => {
  return <main className={styles.formLayout}>{children}</main>;
};

export default FormLayout;
