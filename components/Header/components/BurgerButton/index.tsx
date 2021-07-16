import React from "react";
import styles from "./burger-button.module.scss";

interface BurgerButtonProps {
  isToggled: boolean;
  onToggle: (x: boolean) => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isToggled, onToggle }) => {
  // const [open, setOpen] = React.useState(false);

  // const isToggle = () => {
  //   setOpen(!open);
  // };

  return (
    <button
      className={styles.menu}
      onClick={() => onToggle(!isToggled)}
      data-toggled={isToggled}
      aria-label="Main menu"
      type="button"
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  );
};

export default BurgerButton;
