import { Outlet } from "react-router-dom";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
