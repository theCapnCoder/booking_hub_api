import tripsData from "../../assets/data/trips.json";
import TripsFilter from "../../components/TripsFilter.tsx/TripsFilter";
import TripsList from "../../containers/Trips/TripsList.tsx/TripsList";

const MainPage = () => {
  return (
    <section>
      <TripsFilter />
      <TripsList trips={tripsData} />
    </section>
  );
};

export default MainPage;
