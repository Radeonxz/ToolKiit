import { CardProps } from "./Card.model";

import classes from "./Card.module.css";

const Card = ({ children }: CardProps) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
