import React, { useState } from "react";
import clsx from "clsx";

import styles from "./Items.module.scss";
import { IItem } from "../../types/common";
import { Button } from "../Button";

interface ItemsProps {
  items: IItem[];
  onAddItem: (name: string) => void;
  onDeleteItem: (id: number) => void;
  onChangeActiveItem: (id: number) => void;
  activeId: number | null;
}

export const Items: React.FC<ItemsProps> = ({
  items,
  onAddItem,
  onDeleteItem,
  onChangeActiveItem,
  activeId,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    if (!value) return;
    onAddItem(value);
    setValue("");
  };

  const onDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    onDeleteItem(id);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Type name here..."
        />
        <Button
          title="add new"
          greenStyle
          onClick={onSubmit}
          disabled={!value}
          type="submit"
        />
      </form>
      <ul className={styles.list}>
        {items.map((item: IItem) => {
          return (
            <li
              className={clsx(styles.item, {
                [styles.active]: activeId === item.id,
              })}
              key={item.id}
              onClick={() => onChangeActiveItem(item.id)}
            >
              <p className={styles.title}>{item.name}</p>
              <div className={styles.right_side}>
                <div className={styles.count}>{item.comments.length}</div>
                <Button
                  emptyStyle
                  title={"delete"}
                  onClick={(e) => onDelete(e, item.id)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
