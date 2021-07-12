import React, { memo, MouseEvent } from "react";
import { useLoadingDelay } from "@/hooks";

import styles from "./button.module.scss";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?(): void;
  submit?: boolean;
  // to?: string
  loading?: boolean;
  height?: number;
  width?: number;
  disabled?: boolean;
  type: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick = () => null,
    submit = false,
    loading = false,
    height = 56,
    width = 100 + "%",
    disabled = false,
    type,
    // to
  } = props;

  const delayedLoading = useLoadingDelay(loading);

  const handleButtonClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!submit) e.preventDefault();
    // if (to) await navigate(to)
    onClick();
  };

  return (
    <button
      style={{ height, width }}
      className={styles.button}
      type={submit ? "submit" : "button"}
      data-type={type}
      data-disabled={disabled}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {delayedLoading ? "Loading..." : children}
    </button>
  );
};

export default memo(Button);
