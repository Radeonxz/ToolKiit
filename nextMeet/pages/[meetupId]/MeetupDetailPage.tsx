import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = () => {
  const meetupDetailProps = {
    id: "m1",
    title: "First Meetup",
    image: "https://miro.medium.com/max/1838/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg",
    address: "1 Foo, Bar",
    description: "This is the first one"
  };

  return <MeetupDetail {...meetupDetailProps} />;
};

export default MeetupDetailPage;
