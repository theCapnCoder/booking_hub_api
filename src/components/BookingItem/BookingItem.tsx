import { formatDate } from "../../helpers/dateHelpers";
import { Booking } from "../../types/Booking";

import styles from "./BookingItem.module.scss";

type Props = Booking & {
  onClose: (id: string) => void;
};

const BookingItem: React.FC<Props> = ({
  id,
  trip: { title },
  guests,
  date,
  totalPrice,
  onClose,
}) => {
  const formattedDate = formatDate(date);

  return (
    <li data-test-id="booking" className={styles.booking}>
      <h3 data-test-id="booking-title" className={styles.title}>
        {title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {formattedDate}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        ${totalPrice}
      </span>
      <button
        data-test-id="booking-cancel"
        className={styles.cancel}
        title="Cancel booking"
        onClick={() => onClose(id)}
      >
        ×
      </button>
    </li>
  );
};
export default BookingItem;
