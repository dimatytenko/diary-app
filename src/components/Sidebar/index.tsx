import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <aside className={styles.menu}>
      <div className="container">
        <h1 className={styles.title}>diary app</h1>
        <p className={styles.descr}>Comment with no sense</p>
      </div>
    </aside>
  );
};
