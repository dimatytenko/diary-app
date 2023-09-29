import { useNavigate } from "react-router-dom";

import { Navigation } from "../../components/Navigation";

export const NavigationContainer = () => {
  const navigate = useNavigate();

  const onToLocal = () => {
    navigate("/local");
  };

  const onToHook = () => {
    navigate("/hook");
  };

  const onToRedux = () => {
    navigate("/redux");
  };

  return (
    <Navigation
      onToLocal={onToLocal}
      onToHook={onToHook}
      onToRedux={onToRedux}
    />
  );
};
