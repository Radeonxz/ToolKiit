import MeetupItem from "../MeetupItem";
import "./styles.css";

const MeetupList = (props: any) => {
  return (
    <ul className="list">
      {props.meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
