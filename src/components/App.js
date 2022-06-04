import React from "react";
import DropdownComponent from "./dropdownComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: ["Yes", "Probably Not"],
    };
  }
  render() {
    const { listItems } = this.state;
    return (
      <div className="App">
        <DropdownComponent listItems={listItems} />
      </div>
    );
  }
}

export default App;
