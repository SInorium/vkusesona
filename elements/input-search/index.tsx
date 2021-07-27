import React from "react";
import Search from "@/images/icons/search.svg";
import Quot from "@/images/icons/quot.svg";
import styles from "./input-search.module.scss";
import QuotIcon from "@/images/icons/quot";
export interface InputSearchProps {
  value?: string;
  placeholder?: string;
  iconType: string;
  className?: string;
}

const InputSearch: React.FC<InputSearchProps> = (props) => {
  const { value, placeholder, iconType, className } = props;

  return (
    <label className={className || styles.input}>
      <input
        type="search"
        value={value}
        // data-error={}
        placeholder={placeholder || "Placeholder "}
        data-icon-type={iconType}
      />
      {iconType === "search" ? (
        <Search className={styles.input__icon} />
      ) : (
        <button type="submit" className={styles.button}>
          <QuotIcon className={styles.button__icon} />
        </button>
      )}
    </label>
  );
};

export default InputSearch;
