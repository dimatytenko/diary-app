import React from "react";

import styles from "./Box.module.scss";

interface BoxProps {
  title: string;
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div className={styles.box}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};
