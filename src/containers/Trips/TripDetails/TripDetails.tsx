import { useState } from "react";
import { useParams } from "react-router-dom";
import tripsData from "../../../assets/data/trips.json";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";

import { Trip } from "../types";

import styles from "./TripDetails.module.scss";

const TripDetails: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tripId } = useParams<{ tripId: string }>();
  const trip = tripsData.find((trip: Trip) => trip.id === tripId);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  const { image, title, duration, level, description, price } = trip;

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.tripPage}>
      <div className={styles.trip}>
        <img
          data-test-id="trip-details-image"
          src={image}
          className={styles.img}
          alt="trip photo"
        />

        <div className={styles.contentWrapper}>
          <div className={styles.info}>
            <h3 data-test-id="trip-details-title" className={styles.title}>
              {title}
            </h3>
            <div className={styles.content}>
              <span
                data-test-id="trip-details-duration"
                className={styles.duration}
              >
                <strong>{duration}</strong> days
              </span>
              <span data-test-id="trip-details-level" className={styles.level}>
                {level}
              </span>
            </div>
          </div>

          <div
            data-test-id="trip-details-description"
            className={styles.description}
          >
            {description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong
              data-test-id="trip-details-price-value"
              className={styles.priceValue}
            >
              ${price}
            </strong>
          </div>

          <Button
            data-test-id="trip-details-button"
            className={styles.button}
            onClick={modalOpen}
          >
            Book a trip
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={modalClose}
        title={title}
        duration={duration}
        level={level}
        price={price}
        onSubmit={() => {}}
      ></Modal>
    </section>
  );
};

export default TripDetails;
