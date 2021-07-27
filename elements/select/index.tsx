import React from "react";
import QuotIcon from "@/images/icons/quot";
import styles from "./select.module.scss";

interface SelectProps {
  options: string[];
  title: string;
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, title = "Заголовок" } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className={styles.wrapper} onClick={toggling} data-toggle={isOpen}>
      {/* <div > */}
      {selectedOption || title}
      <QuotIcon strokeColor={"black"} strokeWidth={2} />
      {/* </div> */}
      {isOpen && (
        <ul className={styles.options_list}>
          {options.map((option) => (
            <li
              className={styles.option}
              onClick={onOptionClicked(option)}
              key={Math.random()}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
