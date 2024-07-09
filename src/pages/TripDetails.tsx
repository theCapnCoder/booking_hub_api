import { useParams } from "react-router-dom";

const TripDetails = () => {
  const { tripId } = useParams();

  return <div>TripDetails Page fro Trip ID: {tripId}</div>;
};

export default TripDetails;
