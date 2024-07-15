import ButtonLink from "../../../components/ButtonLink/ButtonLink";

import { Trip } from "../../../types";

import styles from "./TripCard.module.scss";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <li data-test-id="trip-card" className={styles.tripCard}>
      {/* <img data-test-id="trip-card-image" src={trip.image} alt={trip.title} /> */}
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 data-test-id="trip-card-title" className={styles.title}>
            {trip.title}
          </h3>
          <div className={styles.infoContent}>
            <span data-test-id="trip-card-duration" className={styles.duration}>
              <strong>{trip.duration}</strong> days
            </span>
            <span data-test-id="trip-card-level" className={styles.level}>
              {trip.level}
            </span>
          </div>
        </div>
        <div className={styles.tripPrice}>
          <span>Price</span>
          <strong
            data-test-id="trip-card-price-value"
            className={styles.priceValue}
          >
            ${trip.price}
          </strong>
        </div>
      </div>
      <ButtonLink
        data-test-id="trip-card-link"
        to={`./trip/${trip.id}`}
        className={styles.button}
      >
        Discover a trip
      </ButtonLink>
    </li>
  );
};

export default TripCard;
