import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tokens } from "../../constants";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import { useAppDispatch } from "../../redux/hooks";
import { getAuthUser } from "../../redux/reducers/authReducer/actionCreators/getAuthUser";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get(Tokens.Access);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser({ token })).then(() => {
        setIsLoading(false);
        navigate("/");
      });
    } else {
      setIsLoading(false);
      navigate("/sign-in");
    }
  }, [token, dispatch, navigate]);

  if (isLoading) return <div>Loading...</div>;

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
