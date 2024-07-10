import ButtonLink from "../ButtonLink/ButtonLink";
import styles from "./TripDetails.module.scss";

interface TripDetailsProps {
  id: string;
  image: string;
  title: string;
  duration: number;
  level: string;
  description: string;
  price: number;
}

const TripDetails: React.FC<TripDetailsProps> = ({
  image,
  title,
  duration,
  level,
  description,
  price,
}) => {
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

          <ButtonLink className={styles.button}>Book a trip</ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
