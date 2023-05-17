import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const InitialState = [{ color: "blue", width: "10px", height: "10px" }];
  const { boxes, setBoxes } = useState(InitialState);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox }]);
  };
  return (
    <div>
      <h3>Add New Box</h3>
      <NewBoxForm addItem={addBox} />
      <div>
        {boxes.map(({ color, width, height }) => (
          <Box color={color} width={width} height={height} />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
