import { FC } from "react";
import { IRequestCard } from "./types";

const RequestCard: FC<IRequestCard> = ({ request }: IRequestCard) => {
  return (
    <div>
      <div>
        <p>{request.name}</p>
        <p>{request.lastName}</p>
        <p>{request.date}</p>
        <p>{request.number}</p>
      </div>
    </div>
  );
};

export default RequestCard;
