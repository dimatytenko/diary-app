import { useNavigate } from "react-router-dom";

import { generateRandomId } from "../../helpers/generateRandomId";
import { INITIAL_STATE } from "../../constants/common";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LocalStorage } from "../../components/LocalStorage";
import { IItem } from "../../types/common";

export const LocalStorageHookContainer = () => {
  const navigate = useNavigate();
  const [items, setItems] = useLocalStorage<IItem[] | null>(
    "items",
    INITIAL_STATE
  );
  const [activeId, setActiveId] = useLocalStorage<number>(
    "activeId",
    INITIAL_STATE[0].id
  );

  const onAddItem = (name: string) => {
    const newItem = {
      id: generateRandomId(),
      name,
      comments: [],
    };
    setItems([...(items || []), newItem]);
    setActiveId(newItem.id);
  };

  const onDeleteItem = (id: number) => {
    if (!items?.length) return;
    const newItems = items.filter((item) => item.id !== id);
    if (!newItems.length) {
      return setItems(null);
    }
    setItems(newItems);
  };

  const onChangeActiveItem = (id: number) => {
    setActiveId(id);
  };
  const onAddComment = ({ value, color }: { value: string; color: string }) => {
    if (!items?.length) return;
    const newComment = {
      id: generateRandomId(),
      text: value,
      color,
    };

    const newItems = items.map((item) => {
      if (item.id === activeId) {
        return {
          ...item,
          comments: [...item.comments, newComment],
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <LocalStorage
      items={items || []}
      activeId={items?.length ? activeId : 0}
      onAddItem={onAddItem}
      onDeleteItem={onDeleteItem}
      onChangeActiveItem={onChangeActiveItem}
      onAddComment={onAddComment}
      goBack={goBack}
    />
  );
};
