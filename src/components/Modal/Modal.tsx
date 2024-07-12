import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import generateId from "../../helpers/generateId";
import { Booking, Trip } from "../../types";
import Form from "../Form/Form";
import Input from "../Input/Input";
import TripInfo from "../TripInfo/TripInfo";

import styles from "./Modal.module.scss";

interface BookTripModalProps {
  isOpen: boolean;
  trip: Trip;
  addBooking: (booking: Booking) => void;
  onClose: () => void;
}

const Modal: React.FC<BookTripModalProps> = ({
  isOpen,
  trip,
  onClose,
  addBooking,
}) => {
  const { id, title, duration, level, price } = trip;
  const [date, setDate] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);
  const [total, setTotal] = useState<number>(price);

  const navigate = useNavigate();

  useEffect(() => {
    setTotal(guests * price);
  }, [guests, price]);

  const handleClose = () => {
    setGuests(1);
    setDate("");
    setTotal(price);
    onClose();
  };

  const handleSubmit = (formData: Record<string, string>) => {
    const newBooking: Booking = {
      id: generateId(),
      userId: "user-id",
      tripId: id,
      guests: parseInt(formData.guests),
      date: formData.date,
      trip: {
        title,
        duration,
        price,
      },
      totalPrice: total,
      createdAt: new Date().toISOString(),
    };

    addBooking(newBooking);
    navigate("/bookings");
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.bookTripPopup} data-test-id="book-trip-popup">
        <button
          data-test-id="book-trip-popup-close"
          className={styles.closeButton}
          onClick={handleClose}
        >
          ×
        </button>

        <Form
          className={styles.form}
          autoComplete="off"
          textButton="Book a trip"
          onSubmit={handleSubmit}
        >
          <TripInfo title={title} duration={duration} level={level} />
          <Input
            label="Date"
            dataTestId="book-trip-popup-date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Input
            label="Number of guests"
            dataTestId="book-trip-popup-guests"
            name="guests"
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />
          <span className={styles.total}>
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className={styles.totalValue}
            >
              ${total}
            </output>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default Modal;
