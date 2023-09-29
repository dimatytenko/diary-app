import { Route, Routes } from "react-router-dom";
import { LocalStorageContainer } from "../../containers/LocalStorageContainer";
import { Sidebar } from "../Sidebar";
import styles from "./Layout.module.scss";
import { LocalStorageReduxContainer } from "../../containers/LocalStorageRedux";
import { LocalStorageHookContainer } from "../../containers/LocalStorageHook";
import { NavigationContainer } from "../../containers/Navigation";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <section className={styles.section}>
        <div className="container">
          <Routes>
            <Route key="main" path="/" element={<NavigationContainer />} />
            ,
            <Route
              key="local"
              path="/local"
              element={<LocalStorageContainer />}
            />
            ,
            <Route
              key="hook"
              path="/hook"
              element={<LocalStorageHookContainer />}
            />
            ,
            <Route
              key="redux"
              path="/redux"
              element={<LocalStorageReduxContainer />}
            />
          </Routes>
        </div>
      </section>
    </div>
  );
};
