import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tokens } from "../../constants";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import { useAppDispatch } from "../../redux/hooks";
import { getAuthUser } from "../../redux/reducers/authReducer/actionCreators/getAuthUser";

import "react-toastify/dist/ReactToastify.css";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  const token = Cookies.get(Tokens.Access);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser()).then(() => {
        navigate("/");
      });
    } else {
      navigate("/sign-in");
    }
  }, [token, dispatch, navigate]);

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
