import Card from "../../ui/Card";
import "./styles.css";

function MeetupItem(props: any) {
  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="actions">
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
