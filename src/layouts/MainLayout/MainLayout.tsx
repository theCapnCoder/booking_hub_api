import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <h1>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/trip/:tripId">Trip Details</Link>
        <Link to="/404">404</Link>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
