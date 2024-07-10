import TripDetails from "../../components/TripDetails/TripDetails";

const data = {
  id: "4c7564ad-fafc-4641-a692-55a683de7fbe",
  title: "Scotland",
  description:
    "In the North of Great Britain, Scotland is a land of character which has much to offer its visitors. Mountains and valleys, islands and cliffs, castles and distilleries, ghosts and legends... Your guide will allow you to better discover the many facets of this region. The accessible and sumptuous hikes will take you to isolated places enjoying splendid or unmissable views because they are so emblematic of the country.",
  level: "easy",
  duration: 8,
  price: 2145,
  // image: "https://i.gyazo.com/9692ef5341a64659e8a211f19808732f.jpg",
  image: "/",
  createdAt: "2022-05-22T17:14:38.147Z",
};

const TripDetailsPage = () => {
  return <TripDetails {...data} />;
};

export default TripDetailsPage;
