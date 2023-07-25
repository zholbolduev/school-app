import RequestCard from "../../../Entities/AdminEntities/RequestCard/RequestCard";
import { IRequest } from "../../../Entities/AdminEntities/RequestCard/types";

const RequestList = () => {
  const requests: IRequest[] = [
    {
      id: 1,
      name: "Alibek",
      lastName: "Sydygaliev",
      number: "0501-393-121",
      date: "10-10-2023",
    },
  ];
  return (
    <div>
      {requests.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </div>
  );
};

export default RequestList;
