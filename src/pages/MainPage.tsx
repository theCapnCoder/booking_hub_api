import TripsFilter from "../components/TripsFilter.tsx/TripsFilter";
import TripsList from "../components/TripsList.tsx/TripsList";

const MainPage = () => {
  return (
    <main>
      <TripsFilter />
      <TripsList />
    </main>
  );
};

export default MainPage;
