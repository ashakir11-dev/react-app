import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import ProgressButton from "./components/ProgressButton";
function App() {
  let items = ["New York", "Chicago", "Tokyo", "London", "Paris"];
  let heading: string = "Cities";
  let [selectedItem, setSelectedItem] = useState("");
  let [alertVisibile, setAlertVisibility] = useState(false);
  let handleSelectItems = (item: string) => {
    setSelectedItem(item);
  };
  let [color, setColor] = useState("primary");

  let handleOnClick = (count: number) => {
    if (count >= 5) {
      setColor("secondary");
    }
    setAlertVisibility(true);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItems}
      />
      {alertVisibile && (
        <Alert
          onClose={() => setAlertVisibility(false)}
          text={selectedItem === "" ? "Nothing Selected" : selectedItem}
        />
      )}
      <ProgressButton onClick={(count) => handleOnClick(count)} color={color} />
    </div>
  );
}

export default App;
