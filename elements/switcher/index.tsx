import React from "react";
import style from "./switcher.module.scss";

interface SwitcherProps {
  activeValue: string;
  values: ValuesType[];
  handleValue(value: string): void;
}

interface ValuesType {
  label: string;
  value: string;
}

const Switcher: React.FC<SwitcherProps> = (props) => {
  const { values, activeValue, handleValue } = props;
  return (
    <>
      {values.map(({ label, value }, id) => {
        const active = value === activeValue;
        return (
          <button
            key={id}
            data-active={active}
            className={style.switcher}
            onClick={() => handleValue(value)}
          >
            {label}
          </button>
        );
      })}
    </>
  );
};

export default Switcher;
