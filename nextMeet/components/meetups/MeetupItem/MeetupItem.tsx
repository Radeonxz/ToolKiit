import { useRouter } from "next/router";
import Image from "next/image";

import { MeetupItemProps } from "./MeetupItem.models";
import Card from "../../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props: MeetupItemProps) => {
  const router = useRouter();
  const showDetailsOnClick = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div
          /*className={classes.image}*/
          style={{
            position: "relative",
            width: "100%",
            height: "20rem"
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
          <button onClick={showDetailsOnClick}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
