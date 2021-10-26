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

const HomePage = ({ meetups }: any) => {
  return <MeetupList meetups={meetups} />;
};

// export const getServerSideProps = (context: any) => {
// 	const req = context.req;
// 	const res = context.res;

//   return {
//     props: {
//       meetups: meetupData
//     }
//   };
// };

export const getStaticProps = async () => {
  return {
    props: {
      meetups: meetupData
    },
    // regenerate the page by interval
    revalidate: 1
  };
};

export default HomePage;
