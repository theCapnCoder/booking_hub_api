import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import briefcaseIcon from "../../assets/svg/briefcase.svg";
import userIcon from "../../assets/svg/user.svg";
import ButtonLink from "../ButtonLink/ButtonLink";

import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const hideNavigation =
    location.pathname === "/sign-up" || location.pathname === "/sign-in";

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
                  className={clsx(styles.navInner,  styles.profileNav)}
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
                      John Doe
                    </li>
                    <li className={styles.profileNavItem}>
                      <ButtonLink
                        data-test-id="header-profile-nav-sign-out"
                        className={styles.profileNavBtn}
                        href="/sign-in"
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
