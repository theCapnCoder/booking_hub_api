import BookingList from "../../components/BookingList/BookingList";
import { Booking } from "../../types";

import styles from "./BookingsPage.module.scss";

type Props = {
  bookings: Booking[];
  onClose: (index: string) => void;
};

const BookingsPage: React.FC<Props> = ({ bookings, onClose }) => {
  return (
    <section className={styles.bookings}>
      <BookingList bookings={bookings} onClose={(id) => onClose(id)} />
    </section>
  );
};

export default BookingsPage;
