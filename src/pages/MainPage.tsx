import TripsFilter from "../components/TripsFilter.tsx/TripsFilter";
import TripsList from "../components/TripsList.tsx/TripsList";

const MainPage = () => {
  return (
    <section>
      <TripsFilter />
      <TripsList />
    </section>
  );
};

export default MainPage;
