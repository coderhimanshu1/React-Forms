const Box = ({ id, color, width, height }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        margin: "5px",
      }}
    ></div>
  );
};

export default Box;
