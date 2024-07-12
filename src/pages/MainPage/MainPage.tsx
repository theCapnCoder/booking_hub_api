import { useState } from "react";
import tripsData from "../../assets/data/trips.json";
import TripsFilter from "../../components/TripsFilter.tsx/TripsFilter";
import TripsList from "../../containers/Trips/TripsList.tsx/TripsList";
import { Trip } from "../../types";

const MainPage = () => {
  const [filteredTrips, setFilteredTrips] = useState(tripsData);

  const handleFilter = ({
    search,
    duration,
    level,
  }: {
    search: string;
    duration: string;
    level: string;
  }) => {
    const filteredTrips = tripsData.filter((trip: Trip) => {
      const searchRegex = new RegExp(search, "i");
      const isSearchMatch = trip.title.search(searchRegex) !== -1;
      const isDurationMatch =
        duration === "" ||
        (duration === "0_x_5" && trip.duration <= 5) ||
        (duration === "5_x_10" && trip.duration > 5 && trip.duration <= 10) ||
        (duration === "10" && trip.duration > 10);
      const isLevelMatch = level === "" || trip.level === level;

      return isSearchMatch && isDurationMatch && isLevelMatch;
    });

    setFilteredTrips(filteredTrips);
  };

  return (
    <section>
      <TripsFilter onFilter={handleFilter} />
      <TripsList trips={filteredTrips} />
    </section>
  );
};

export default MainPage;
