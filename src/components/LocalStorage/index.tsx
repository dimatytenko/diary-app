import React from "react";

import { Box } from "../Box";
import styles from "./Main.module.scss";
import { Items } from "../Items";
import { Comments } from "../Comments";
import { IItem } from "../../types/common";
import { Button } from "../Button";

interface ILocalStorageProps {
  items: IItem[];
  activeId: number;
  onAddItem: (name: string) => void;
  onDeleteItem: (id: number) => void;
  onChangeActiveItem: (id: number) => void;
  onAddComment: ({ value, color }: { value: string; color: string }) => void;
  goBack: () => void;
}

export const LocalStorage: React.FC<ILocalStorageProps> = ({
  items,
  activeId,
  onAddItem,
  onDeleteItem,
  onChangeActiveItem,
  onAddComment,
  goBack,
}) => {
  return (
    <>
      {items && (
        <div className={styles.main}>
          <Button title="back" onClick={goBack} />
          <Box title="items">
            <Items
              items={items}
              onAddItem={onAddItem}
              onDeleteItem={onDeleteItem}
              onChangeActiveItem={onChangeActiveItem}
              activeId={activeId}
            />
          </Box>
          <Box title={`comments #${activeId || ""}`}>
            <Comments
              item={items.find((item) => item.id === activeId)}
              onAddComment={onAddComment}
            />
          </Box>
        </div>
      )}
    </>
  );
};
