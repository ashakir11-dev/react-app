import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const message = <p>No Items found</p>;
  const handle = (item: string, index: number) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };
  const renderItems = items.map((item, index) => (
    <ul className="list-group">
      <li
        className={
          selectedIndex === index ? "list-group-item active" : "list-group-item"
        }
        key={item}
        onClick={() => handle(item, index)}
      >
        {item}
      </li>
    </ul>
  ));

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? message : renderItems}
    </>
  );
}

export default ListGroup;
