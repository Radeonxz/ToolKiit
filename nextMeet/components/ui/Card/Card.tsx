import { CardProps } from "./Card.model";

import "./styles.css";

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
