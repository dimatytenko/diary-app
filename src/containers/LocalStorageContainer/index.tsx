import { useEffect, useState } from "react";

import { IItem } from "../../types/common";
import storageLocal from "../../helpers/storageLocal";
import { INITIAL_STATE } from "../../constants/common";
import { generateRandomId } from "../../helpers/generateRandomId";
import { LocalStorage } from "../../components/LocalStorage";
import { useNavigate } from "react-router-dom";

export const LocalStorageContainer = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<IItem[] | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const items = storageLocal.get<IItem[]>("items");
    const activeId = storageLocal.get<number>("activeId");
    if (items && !!items.length) {
      setItems(items);
      setActiveId(activeId);
      return;
    } else {
      setItems(INITIAL_STATE);
      setActiveId(INITIAL_STATE[0].id);
    }
  }, []);

  const onAddItem = (name: string) => {
    const newItem = {
      id: generateRandomId(),
      name,
      comments: [],
    };
    setItems([...(items || []), newItem]);
    localStorage.setItem("items", JSON.stringify([...(items || []), newItem]));
    setActiveId(newItem.id);
    localStorage.setItem("activeId", JSON.stringify(newItem.id));
  };

  const onDeleteItem = (id: number) => {
    if (!items?.length) return;
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    if (!newItems.length) {
      return setActiveId(null);
    }
    if (id === activeId) {
      setActiveId(newItems[0].id);
      localStorage.setItem("activeId", JSON.stringify(newItems[0].id));
    }
  };

  const onChangeActiveItem = (id: number) => {
    setActiveId(id);
    localStorage.setItem("activeId", JSON.stringify(id));
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
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <LocalStorage
      items={items || []}
      activeId={activeId || 0}
      onAddItem={onAddItem}
      onDeleteItem={onDeleteItem}
      onChangeActiveItem={onChangeActiveItem}
      onAddComment={onAddComment}
      goBack={goBack}
    />
  );
};
