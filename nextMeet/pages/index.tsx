import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const meetupData = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://miro.medium.com/max/1838/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg",
    address: "1 Foo, Bar",
    description: "This is the first one"
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://miro.medium.com/max/1838/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg",
    address: "2 Foo, Bar",
    description: "This is the Second one"
  }
];

const HomePage = () => {
  return (
    <Layout>
      <MeetupList meetups={meetupData} />;
    </Layout>
  );
};

export default HomePage;
