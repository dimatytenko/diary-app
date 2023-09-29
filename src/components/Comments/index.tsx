import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

import { IItem, IComment } from "../../types/common";
import styles from "./Comments.module.scss";
import { Button } from "../Button";

interface CommentsProps {
  item?: IItem;
  onAddComment: ({ value, color }: { value: string; color: string }) => void;
}

export const Comments: React.FC<CommentsProps> = ({ item, onAddComment }) => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#000000");
  const [isVisibleColor, setIsVisibleColor] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = () => {
    if (!value) return;
    onAddComment({ value, color });
    setValue("");
    setIsVisibleColor(false);
    setColor("#000000");
  };

  return (
    <div className={styles.comments}>
      <ul className={styles.list}>
        {item?.comments.map((comm: IComment) => {
          return (
            <li key={comm.id} className={styles.item}>
              <div
                className={styles.color}
                style={{ backgroundColor: comm.color }}
              ></div>
              <div className={styles.text}>{comm.text}</div>
            </li>
          );
        })}
      </ul>
      <form className={styles.form}>
        <div className={styles.color_picker}>
          <div
            className={styles.color_picker_block}
            onClick={() => setIsVisibleColor(!isVisibleColor)}
          >
            <div
              className={styles.color_inner_block}
              style={{ backgroundColor: color }}
            ></div>
          </div>
          {isVisibleColor && (
            <div className={styles.color_picker_hex}>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
          )}
        </div>
        <textarea
          rows={3}
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder="Type comment here..."
        />
        <Button
          title="add new"
          onClick={onSubmit}
          disabled={!value}
          type="submit"
        />
      </form>
    </div>
  );
};
