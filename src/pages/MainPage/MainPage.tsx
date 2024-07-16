import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import TripsFilter from "../../components/TripsFilter.tsx/TripsFilter";
import TripsList from "../../containers/Trips/TripsList.tsx/TripsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTrips } from "../../redux/reducers/tripsReducer";
import { tripsSelector } from "../../redux/selectors";
import { Trip } from "../../types/Trip";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, trips } = useAppSelector(tripsSelector);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(trips);

  useEffect(() => {
    dispatch(getTrips());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTrips(trips);
  }, [trips]);

  const handleFilter = ({
    search,
    duration,
    level,
  }: {
    search: string;
    duration: string;
    level: string;
  }) => {
    const filtered = trips.filter((trip: Trip) => {
      const searchRegex = new RegExp(`^${search}`, "i");
      const isSearchMatch = trip.title.search(searchRegex) !== -1;
      const isDurationMatch =
        duration === "" ||
        (duration === "0_x_5" && trip.duration <= 5) ||
        (duration === "5_x_10" && trip.duration > 5 && trip.duration <= 10) ||
        (duration === "10" && trip.duration > 10);
      const isLevelMatch = level === "" || trip.level === level;

      return isSearchMatch && isDurationMatch && isLevelMatch;
    });

    setFilteredTrips(filtered);
  };

  if (isLoading) return <Loader />;

  return (
    <section>
      <TripsFilter onFilter={handleFilter} />
      <TripsList trips={filteredTrips} />
    </section>
  );
};

export default MainPage;
