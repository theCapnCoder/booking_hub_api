import { useEffect } from "react";
import BookingList from "../../components/BookingList/BookingList";
import Loader from "../../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  deleteBooking,
  getBookings,
} from "../../redux/reducers/bookingsReducer";
import { bookingsSelector } from "../../redux/selectors/getBookings";

import styles from "./BookingsPage.module.scss";

const BookingsPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, bookings } = useAppSelector(bookingsSelector);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  const handleClose = (id: string) => {
    dispatch(deleteBooking(id));
  };

  if (isLoading) return <Loader />;

  return (
    <section className={styles.bookings}>
      <BookingList bookings={bookings} onClose={(id) => handleClose(id)} />
    </section>
  );
};

export default BookingsPage;
