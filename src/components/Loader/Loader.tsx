import styles from "./Loader.module.scss";

const Loader = () => {
  return <div className={styles.loader} data-test-id="loader"></div>;
};

export default Loader;
