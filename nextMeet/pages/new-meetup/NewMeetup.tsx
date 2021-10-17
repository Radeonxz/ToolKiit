import NewMeetupForm from "../../components/meetups/MeetupForm/MeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = (meetupData: any) => {
    console.log("meetupData: ", meetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
