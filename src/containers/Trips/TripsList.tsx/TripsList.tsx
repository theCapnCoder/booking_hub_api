import TripCard from "../TripCard.tsx/TripCard";

import styles from "./TripsList.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { tripsSelector } from "../../../redux/selectors/getTrips";
import { useEffect } from "react";
import { getAllTrips } from "../../../redux/reducers/tripsReducer";

const TripsList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, trips } = useAppSelector(tripsSelector);

  useEffect(() => {
    dispatch(getAllTrips());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className={styles.trips}>
      <h2 className="visually-hidden">Trips List</h2>
      <ul className={styles.tripList}>
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </ul>
    </section>
  );
};

export default TripsList;
