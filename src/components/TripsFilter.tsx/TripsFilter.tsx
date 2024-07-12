import clsx from "clsx";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { durationOptions, levelOptions } from "./filterOptions";

import styles from "./TripsFilter.module.scss";

interface TripsFilterProps {
  onFilter: (filters: {
    search: string;
    duration: string;
    level: string;
  }) => void;
}

const TripsFilter: React.FC<TripsFilterProps> = ({ onFilter }) => {
  const initialState = {
    search: "",
    duration: "",
    level: "",
  };

  const [filters, setFilters] = useState(initialState);

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilter({
      ...filters,
      [name]: value,
    });
  };

  const handleClearFilter = () => {
    setFilters(initialState);
    onFilter(initialState);
  };

  return (
    <section>
      <div className={styles.tripsFilter}>
        <h2 className="visually-hidden">Trips filter</h2>
        <form className={styles.form} autoComplete="off">
          <Input
            dataTestId="filter-search"
            name="search"
            type="search"
            placeholder="Search by title"
            className={clsx("input", styles.search)}
            value={filters.search}
            onChange={handleFilterChange}
          />
          <Select
            name="duration"
            options={durationOptions}
            data-test-id="filter-duration"
            className="select"
            value={filters.duration}
            onChange={handleFilterChange}
          />
          <Select
            name="level"
            options={levelOptions}
            data-test-id="filter-level"
            className="select"
            value={filters.level}
            onChange={handleFilterChange}
          />
        </form>
      </div>
      <Button onClick={handleClearFilter}>Clear filter</Button>
    </section>
  );
};

export default TripsFilter;
