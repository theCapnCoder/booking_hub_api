import clsx from "clsx";
import Input from "../Input/Input";

import styles from "./TripsFilter.module.scss";

const TripsFilter = () => {
  return (
    <section className={styles.tripsFilter}>
      <h2 className="visually-hidden">Trips filter</h2>
      <form className={styles.form} autoComplete="off">
        <Input
          dataTestId="filter-search"
          name="search"
          type="search"
          placeholder="search by title"
          className={clsx("input", styles.search)}
        />
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select data-test-id="filter-duration" name="duration">
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select data-test-id="filter-level" name="level">
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default TripsFilter;
