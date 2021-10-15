import { CardProps } from "./Card.model";

import "./Card.module.css";

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
