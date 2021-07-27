import React from "react";
import Quot from "@/images/icons/quot.svg";

import styles from "./navigation_link.module.scss";
import QuotIcon from "@/images/icons/quot";

interface NavigationItemProps {
  text: string;
  revert?: boolean;
  className?: string;
  color?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const { text, revert, className, color } = props;
  return (
    <>
      <a data-revert={revert} className={styles.link + " " + className}>
        {text} <QuotIcon data-color={color} className={styles.icon} />
      </a>
    </>
  );
};

export default NavigationItem;
