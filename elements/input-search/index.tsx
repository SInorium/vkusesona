import React from "react";
import Search from "@/images/icons/search.svg";
import Quot from "@/images/icons/quot.svg";
import styles from "./input-search.module.scss";
export interface InputSearchProps {
  value?: string;
  placeholder?: string;
  iconType: string;
}

const InputSearch: React.FC<InputSearchProps> = (props) => {
  const { value, placeholder, iconType } = props;

  return (
    <label className={styles.input}>
      <input
        type="search"
        value={value}
        // data-error={}
        placeholder={placeholder || "Placeholder "}
      />
      {iconType === "search" ? (
        <Search className={styles.input__icon} />
      ) : (
        <button type="submit" className={styles.button}>
          <Quot className={styles.button__icon} />
        </button>
      )}
    </label>
  );
};

export default InputSearch;
