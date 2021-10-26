// domain.com/new-meetup/meetupId
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props: any) => {
  return <MeetupDetail {...props.meetupData} />;
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1"
        }
      },
      {
        params: {
          meetupId: "m2"
        }
      }
    ]
  };
};

export const getStaticProps = async (context: any) => {
  // fetch meetup by id
  const meetupId = context.params.meetupId;

  console.log("meetupId: ", meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First Meetup",
        image: "https://miro.medium.com/max/1838/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg",
        address: "1 Foo, Bar",
        description: "This is the first one"
      }
    }
  };
};

export default MeetupDetailPage;
