interface ICard {
  title: string;
  description: string;
  price?: string;
  img: string;
  type: string;
}

export interface IProps {
  card: ICard;
}
