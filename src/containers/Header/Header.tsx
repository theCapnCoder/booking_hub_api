import clsx from "clsx";
import Cookies from "js-cookie";
import { Link, useLocation } from "react-router-dom";
import briefcaseIcon from "../../assets/svg/briefcase.svg";
import userIcon from "../../assets/svg/user.svg";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { Tokens } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetState } from "../../redux/reducers/authReducer/authSlice";
import { authUserSelector } from "../../redux/selectors/getAuthUser";

import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector(authUserSelector);

  const hideNavigation =
    location.pathname === "/sign-up" || location.pathname === "/sign-in";

  const handleClick = () => {
    Cookies.remove(Tokens.Access);
    dispatch(resetState());
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" data-test-id="header-logo" className={styles.logo}>
          Travel App
        </Link>
        {!hideNavigation && (
          <nav data-test-id="header-nav" className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem} title="Bookings">
                <Link
                  to="/bookings"
                  data-test-id="header-bookings-link"
                  className={styles.navInner}
                >
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcaseIcon} alt="bookings" />
                </Link>
              </li>
              <li className={styles.navItem} title="Profile">
                <div
                  data-test-id="header-profile-nav"
                  className={clsx(styles.navInner, styles.profileNav)}
                  tabIndex={0}
                >
                  <span className="visually-hidden">Profile</span>
                  <img src={userIcon} alt="profile" />
                  <ul
                    data-test-id="header-profile-nav-list"
                    className={styles.profileNavList}
                  >
                    <li
                      data-test-id="header-profile-nav-username"
                      className={styles.profileNavItem}
                    >
                      {user?.fullName}
                    </li>
                    <li className={styles.profileNavItem}>
                      <ButtonLink
                        data-test-id="header-profile-nav-sign-out"
                        className={styles.profileNavBtn}
                        to="/sign-in"
                        onClick={handleClick}
                      >
                        Sign Out
                      </ButtonLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
