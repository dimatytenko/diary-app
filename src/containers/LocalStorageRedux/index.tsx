import { LocalStorage } from "../../components/LocalStorage";
import { useSelector, useDispatch } from "react-redux";
import { itemsSelectors } from "../../redux/items";
import { itemsReducer } from "../../redux/items";
import { useNavigate } from "react-router-dom";

export const LocalStorageReduxContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector(itemsSelectors.getItems);
  const activeId = useSelector(itemsSelectors.getActiveId);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <LocalStorage
      items={items || []}
      activeId={items?.length ? activeId : 0}
      onAddItem={(text) => dispatch(itemsReducer.addItem(text))}
      onDeleteItem={(id) => dispatch(itemsReducer.deleteItem(id))}
      onChangeActiveItem={(id) => dispatch(itemsReducer.changeActiveId(id))}
      onAddComment={(payload: { value: string; color: string }) =>
        dispatch(itemsReducer.addComment(payload))
      }
      goBack={goBack}
    />
  );
};
