import "./Header.css";
import userIcon from "../../assets/svg/user.svg";
import briefcaseIcon from "../../assets/svg/briefcase.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const hideNavigation = location.pathname === "/sign-up" || location.pathname === "/sign-in";

  return (
    <header className="header">
      <div className="header__inner">
        <Link
          to="/"
          data-test-id="header-logo"
          className="header__logo"
        >
          Travel App
        </Link>
        {!hideNavigation && (
          <nav data-test-id="header-nav" className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <Link
                  to="/bookings"
                  data-test-id="header-bookings-link"
                  className="nav-header__inner"
                >
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcaseIcon} alt="bookings" />
                </Link>
              </li>
              <li className="nav-header__item" title="Profile">
                <div
                  data-test-id="header-profile-nav"
                  className="nav-header__inner profile-nav"
                  tabIndex={0}
                >
                  <span className="visually-hidden">Profile</span>
                  <img src={userIcon} alt="profile" />
                  {/* <ul
                    data-test-id="header-profile-nav-list"
                    className="profile-nav__list"
                  >
                    <li
                      data-test-id="header-profile-nav-username"
                      className="profile-nav__item"
                    >
                      John Doe
                    </li>
                    <li className="profile-nav__item">
                      <button
                        data-test-id="header-profile-nav-sign-out"
                        className="profile-nav__sign-out button"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul> */}
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
