const generateColor = () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }

  return color;
};

const Color = (WrapperComponent: any) => {
  const colorRandom = generateColor();

  return (props: any) => (
    <div style={{ color: colorRandom }}>
      <WrapperComponent {...props} />
    </div>
  );
};

export default Color;
