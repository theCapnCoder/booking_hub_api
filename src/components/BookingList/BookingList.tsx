import { Booking } from "../../types/Booking";
import BookingItem from "../BookingItem/BookingItem";

import styles from "./BookingList.module.scss";

interface BookingListProps {
  bookings: Booking[];
  onClose: (index: string) => void;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, onClose }) => (
  <ul className={styles.list}>
    {bookings.map((booking, index) => (
      <BookingItem
        key={index}
        {...booking}
        onClose={(id: string) => onClose(id)}
      />
    ))}
  </ul>
);

export default BookingList;
