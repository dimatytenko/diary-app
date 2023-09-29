import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  emptyStyle?: boolean;
  greenStyle?: boolean;
  fullStyle?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  emptyStyle,
  greenStyle,
  fullStyle,
  disabled,
  type,
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.disabled]: disabled,
        [styles.emptyStyle]: emptyStyle,
        [styles.greenStyle]: greenStyle,
        [styles.fullStyle]: fullStyle,
      })}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};
