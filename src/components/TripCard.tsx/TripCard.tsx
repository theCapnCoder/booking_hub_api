import tripImg from "../../assets/img/iceland.jpg";
import ButtonLink from "../ButtonLink/ButtonLink";

import styles from "./TripCard.module.scss";

const TripCard = () => {
  return (
    <li data-test-id="trip-card" className={styles.tripCard}>
      <img data-test-id="trip-card-image" src={tripImg} alt="trip photo" />
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 data-test-id="trip-card-title" className={styles.title}>
            Iceland
          </h3>
          <div className={styles.infoContent}>
            <span data-test-id="trip-card-duration" className={styles.duration}>
              <strong>15</strong> days
            </span>
            <span data-test-id="trip-card-level" className={styles.level}>
              easy
            </span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong
            data-test-id="trip-card-price-value"
            className={styles.priceValue}
          >
            $7000
          </strong>
        </div>
      </div>

      <ButtonLink
        data-test-id="trip-card-link"
        href="./trip.html"
        className={styles.button}
      >
        Discover a trip
      </ButtonLink>
    </li>
  );
};

export default TripCard;
