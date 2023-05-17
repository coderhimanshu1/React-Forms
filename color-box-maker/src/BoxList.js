import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const initialState = [{ color: "blue", width: "10px", height: "10px" }];
  const [boxes, setBoxes] = useState(initialState);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  return (
    <div>
      <h3>Add New Box</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, color, width, height }) => (
          <Box color={color} width={width} height={height} key={id} />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
