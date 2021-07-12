import React from "react";
import Quot from "@/images/icons/quot.svg";

import styles from "./navigation_link.module.scss";

interface NavigationItemProps {
  text: string;
  revert?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const { text, revert } = props;
  return (
    <>
      <a data-revert={revert} className={styles.link + " text-sm--b d-flex"}>
        {text} <Quot className={styles.icon} />
      </a>
    </>
  );
};

export default NavigationItem;
