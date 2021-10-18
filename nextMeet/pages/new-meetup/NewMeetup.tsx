import NewMeetupForm from "../../components/meetups/MeetupForm/MeetupForm";

import { MeetupItemProps } from "../../components/meetups/MeetupItem/MeetupItem.models";

const NewMeetup = () => {
  const addMeetupHandler = (meetupData: MeetupItemProps) => {
    console.log("meetupData: ", meetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
