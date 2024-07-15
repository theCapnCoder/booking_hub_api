import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import Modal from "../../../components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getTripById } from "../../../redux/reducers/tripsReducer/actionCreators/getTripById";
import { tripsSelector } from "../../../redux/selectors";

import styles from "./TripDetails.module.scss";
import { Booking } from "../../../types/Booking";

type Props = {
  addBooking: (booking: Booking) => void;
};

const TripDetails: React.FC<Props> = ({ addBooking }) => {
  const dispatch = useAppDispatch();
  const { isLoading, currentTrip } = useAppSelector(tripsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tripId } = useParams<{ tripId: string }>();

  useEffect(() => {
    if (tripId) {
      dispatch(getTripById(tripId));
    }
  }, [dispatch, tripId]);

  if (!currentTrip) {
    return <div>Trip not found</div>;
  }

  const { title, duration, level, description, price } = currentTrip;

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={styles.tripPage}>
      <div className={styles.trip}>
        {/* <img
          data-test-id="trip-details-image"
          src={image}
          className={styles.img}
          alt="trip photo"
        /> */}

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
        trip={currentTrip}
        addBooking={addBooking}
        isOpen={isModalOpen}
        onClose={modalClose}
      ></Modal>
    </section>
  );
};

export default TripDetails;
