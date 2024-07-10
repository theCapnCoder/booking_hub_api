import styles from "./TripInfo.module.scss";

interface TripInfoProps {
  title: string;
  duration: number;
  level: string;
}

const TripInfo: React.FC<TripInfoProps> = ({ title, duration, level }) => {
  return (
    <div className={styles.info}>
      <h3 data-test-id="book-trip-popup-title" className={styles.title}>
        {title}
      </h3>
      <div className={styles.content}>
        <span
          data-test-id="book-trip-popup-duration"
          className={styles.duration}
        >
          <strong>{duration}</strong> days
        </span>
        <span
          data-test-id="book-trip-popup-level"
          className={styles.level}
        >
          {level}
        </span>
      </div>
    </div>
  );
};

export default TripInfo;
