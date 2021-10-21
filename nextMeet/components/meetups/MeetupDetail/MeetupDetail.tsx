import Image from "next/image";

import { MeetupItemProps } from "../MeetupItem/MeetupItem.models";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({
  title,
  image,
  address,
  description
}: MeetupItemProps) => {
  return (
    <section className={classes.detail}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "20rem"
        }}
      >
        <Image src={image} alt="first" layout="fill" objectFit="contain" />
      </div>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
