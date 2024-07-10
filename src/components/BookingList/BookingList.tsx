import { FC } from "react";
import BookingItem from "../BookingItem/BookingItem";

import styles from "./BookingList.module.scss";

interface Booking {
  title: string;
  guests: number;
  date: string;
  total: number;
}

interface BookingListProps {
  bookings: Booking[];
  handleCancel: (index: number) => void;
}

const BookingList: FC<BookingListProps> = ({ bookings, handleCancel }) => (
  <ul className={styles.list}>
    {bookings.map((booking, index) => (
      <BookingItem key={index} {...booking} onCancel={() => handleCancel(index)} />
    ))}
  </ul>
);

export default BookingList;
