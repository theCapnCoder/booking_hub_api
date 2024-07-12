import { Booking } from "../../types";
import BookingItem from "../BookingItem/BookingItem";

import styles from "./BookingList.module.scss";

interface BookingListProps {
  bookings: Booking[];
  onClose: (index: string) => void;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, onClose }) => (
  <ul className={styles.list}>
    {bookings.map((booking, index) => (
      <BookingItem key={index} {...booking} onClose={(id) => onClose(id)} />
    ))}
  </ul>
);

export default BookingList;
