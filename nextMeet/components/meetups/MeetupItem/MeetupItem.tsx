import Image from "next/image";

import Card from "../../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props: any) {
  return (
    <li className={classes.item}>
      <Card>
        <div
          /*className={classes.image}*/
          style={{
            position: "relative",
            width: "100%",
            height: "25rem"
          }}
        >
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
