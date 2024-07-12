import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import generateId from "../../helpers/generateId";
import { Booking, Trip } from "../../types";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import TripInfo from "../TripInfo/TripInfo";

import { validateDate, validateGuests } from "../../helpers/validation";

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
  const [dateError, setDateError] = useState<string>("");
  const [guestsError, setGuestsError] = useState<string>("");
  const [touched, setTouched] = useState<{ date: boolean; guests: boolean }>({
    date: false,
    guests: false,
  });

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

  const handleSubmit = (data: Record<string, string>) => {
    console.log(data);

    const newBooking: Booking = {
      id: generateId(),
      userId: "user-id",
      tripId: id,
      guests,
      date,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "date") {
      setDate(value);
    } else if (name === "guests") {
      setGuests(Number(value));
    }
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  useEffect(() => {
    if (touched.date) {
      const dateValidation = validateDate(date);
      setDateError(dateValidation.message);
    }
    if (touched.guests) {
      const guestsValidation = validateGuests(guests);
      setGuestsError(guestsValidation.message);
    }
  }, [date, guests, touched]);

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
          onSubmit={handleSubmit}
        >
          <TripInfo title={title} duration={duration} level={level} />
          <Input
            label="Date"
            dataTestId="book-trip-popup-date"
            name="date"
            type="date"
            value={date}
            onChange={handleChange}
            required
            error={touched.date ? dateError : ""}
          />
          <Input
            label="Number of guests"
            dataTestId="book-trip-popup-guests"
            name="guests"
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={handleChange}
            required
            error={touched.guests ? guestsError : ""}
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
          <Button
            data-test-id="book-trip-popup-book-button"
            type="submit"
            disabled={!date || guests < 1 || guests > 10}
          >
            Book a trip
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Modal;
