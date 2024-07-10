import TripCard from "../TripCard.tsx/TripCard";

import styles from "./TripsList.module.scss";

const TripsList = () => {
  return (
    <section className={styles.trips}>
      <h2 className="visually-hidden">Trips List</h2>
      <ul className={styles.tripList}>
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
      </ul>
    </section>
  );
};

export default TripsList;
