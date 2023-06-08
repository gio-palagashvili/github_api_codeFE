import { FC } from "react";

interface ListItemProps {
  image: string;
  text: string;
}

const ListItem: FC<ListItemProps> = ({ image, text }) => {
  return <div>{image}</div>;
};

export default ListItem;
