import TripCard from "../TripCard.tsx/TripCard";

import styles from "./TripsList.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { tripsSelector } from "../../../redux/selectors/getTrips";
import { useEffect } from "react";
import { getTrips } from "../../../redux/reducers/tripsReducer";
import Loader from "../../../components/Loader/Loader";

const TripsList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, trips } = useAppSelector(tripsSelector);

  useEffect(() => {
    dispatch(getTrips());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <section className={styles.trips}>
      <h2 className="visually-hidden">Trips List</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.tripList}>
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TripsList;
