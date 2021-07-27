import React, { memo } from "react";
import styles from "./tabs.module.scss";


const Tabs = (props) => {
  const { tabs, activeTab, handleTabChange } = props;
  return (
    <div className={styles.wrapper}>
      {tabs.map(({ label, value }, index) => {
        const active = value === activeTab;

        return (
          <div
            key={index}
            className={styles.tab}
            data-active={active}
            onClick={() => handleTabChange(value)}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Tabs);
