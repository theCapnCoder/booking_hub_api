import { FC } from "react";

import styles from "./BookingItem.module.scss";

interface BookingItemProps {
  title: string;
  guests: number;
  date: string;
  total: number;
  onCancel: () => void;
}

const BookingItem: FC<BookingItemProps> = ({
  title,
  guests,
  date,
  total,
  onCancel,
}) => (
  <li data-test-id="booking" className={styles.booking}>
    <h3 data-test-id="booking-title" className={styles.title}>
      {title}
    </h3>
    <span data-test-id="booking-guests" className="booking__guests">
      {guests} guests
    </span>
    <span data-test-id="booking-date" className="booking__date">
      {date}
    </span>
    <span data-test-id="booking-total" className="booking__total">
      ${total}
    </span>
    <button
      data-test-id="booking-cancel"
      className={styles.cancel}
      title="Cancel booking"
      onClick={onCancel}
    >
      ×
    </button>
  </li>
);

export default BookingItem;
