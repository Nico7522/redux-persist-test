import { useSelector } from "react-redux";
import Item from "../../components/item/item";

export default function Items() {
   
  const items = useSelector((state) => state.items.items);
  console.log(items);

  return (
    <>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </>
  );
}
