interface ICard {
  title: string;
  description: string;
  start: string;
  price?: string;
  img: string;
  type: string;
  id?: number;
}

export interface IProps {
  card: ICard;
}
