import styles from "./container.module.css";
// a structural component
export default function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
