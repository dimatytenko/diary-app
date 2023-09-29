import React from "react";

import styles from "./Navigation.module.scss";

import { Button } from "../Button";
interface INavigationProps {
  onToLocal: () => void;
  onToHook: () => void;
  onToRedux: () => void;
}

export const Navigation: React.FC<INavigationProps> = ({
  onToLocal,
  onToHook,
  onToRedux,
}) => {
  return (
    <div className={styles.nav}>
      <Button title="local storage" onClick={onToLocal} fullStyle />
      <Button title="hook" onClick={onToHook} greenStyle fullStyle />
      <Button title="redux" onClick={onToRedux} emptyStyle fullStyle />
    </div>
  );
};
