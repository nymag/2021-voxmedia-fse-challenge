import React from "react";

// Accept a tube item, render some properties
// Add css class to the tubeItem
const TubeItem = ({ item }) => {
  return <div>{item.title}</div>;
};

export default TubeItem;
