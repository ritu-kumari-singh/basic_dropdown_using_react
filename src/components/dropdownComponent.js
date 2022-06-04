import React from "react";

class DropdownComponent extends React.Component {
  //display dropdown on hover
  handleHover = () => {
    document.getElementById("dropdownMenu").style.display = "block";
  };
  //add or remove dropdown on click
  handleClick = () => {
    if (document.getElementById("dropdownMenu").style.display === "block") {
      document.getElementById("dropdownMenu").style.display = "none";
    } else {
      document.getElementById("dropdownMenu").style.display = "block";
    }
  };
  //close the dropdown on click of an item in the dropdown
  handleListClick = (e) => {
    document.getElementsByTagName("button")[0].innerText = e.target.innerText;
    document.getElementById("dropdownMenu").style.display = "none";
  };
  render() {
    const listItems = this.props.listItems;
    var options = [];
    for (let i = 0; i < listItems.length; i++) {
      options.push(
        <li key={i} onClick={this.handleListClick}>
          {listItems[i]}
        </li>
      );
    }
    return (
      <div className="dropdownContainer">
        <label>Should you use a dropdown?</label>
        <button onMouseOver={this.handleHover} onClick={this.handleClick}>
          Select
        </button>
        <ul id="dropdownMenu">{options}</ul>
      </div>
    );
  }
}

export default DropdownComponent;
