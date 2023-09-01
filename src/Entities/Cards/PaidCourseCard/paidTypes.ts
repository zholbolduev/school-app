interface ICard {
  name: string;
  description: string;
  price: number;
  duration: number;
  lectureQuantity: number;
  courseDirection: string;
  id?: number;
}

export interface IProps {
  card: ICard;
}
