import { SelectHTMLAttributes } from "react";

import styles from "./Select.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <label className={styles.select}>
      <span className="visually-hidden">duration</span>
      <select {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
