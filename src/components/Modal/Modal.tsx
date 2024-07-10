// BookTripModal.tsx
import { FC, useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import TripInfo from "../TripInfo/TripInfo";
import Input from "../Input/Input";
import ButtonLink from "../ButtonLink/ButtonLink";

interface BookTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  duration: number;
  level: string;
  price: number;
  onSubmit: (date: string, guests: number) => void;
}

const Modal: FC<BookTripModalProps> = ({
  isOpen,
  onClose,
  title,
  duration,
  level,
  price,
  onSubmit,
}) => {
  const [date, setDate] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);
  const [total, setTotal] = useState<number>(price);

  useEffect(() => {
    setTotal(guests * price);
  }, [guests, price]);

  const handleClose = () => {
    setGuests(1);
    setDate("");
    setTotal(price);
    
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(date, guests);
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

        <form
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
          <ButtonLink
            data-test-id="book-trip-popup-submit"
            href="#"
            onClick={handleSubmit}
            className="button"
          >
            Book a trip
          </ButtonLink>
        </form>
      </div>
    </div>
  );
};

export default Modal;
