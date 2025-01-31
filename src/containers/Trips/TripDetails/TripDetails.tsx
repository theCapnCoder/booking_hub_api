import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import Modal from "../../../components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { createBooking } from "../../../redux/reducers/bookingsReducer";
import { BookingsParams } from "../../../redux/reducers/bookingsReducer/types";
import { getTripById } from "../../../redux/reducers/tripsReducer/actionCreators/getTripById";
import { tripsSelector } from "../../../redux/selectors";

import styles from "./TripDetails.module.scss";

const TripDetails = () => {
  const dispatch = useAppDispatch();
  const { isLoading, currentTrip } = useAppSelector(tripsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tripId } = useParams<{ tripId: string }>();

  useEffect(() => {
    if (tripId) {
      dispatch(getTripById(tripId));
    }
  }, [dispatch, tripId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!currentTrip) {
    return <div>Trip not found</div>;
  }

  const { image, title, duration, level, description, price } = currentTrip;

  const addBooking = (data: Record<string, string>) => {
    if (!tripId) {
      toast("Trip ID is missing.");
      return;
    }

    const booking: BookingsParams = {
      tripId: tripId,
      guests: parseInt(data.guests, 10),
      date: data.date,
    };
    dispatch(createBooking(booking)).then(({ meta }) => {
      setIsModalOpen(false);
      if (meta.requestStatus === "fulfilled") {
        toast("Booking created successfully");
      } else if (meta.requestStatus === "rejected") {
        toast.error("Failed to create booking. Please try again.", {
          className: "notification",
        });
      }
    });
  };

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.tripPage}>
      <ToastContainer autoClose={2000} />
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
        trip={currentTrip}
        handleSubmit={addBooking}
        isOpen={isModalOpen}
        onClose={modalClose}
      ></Modal>
    </section>
  );
};

export default TripDetails;
