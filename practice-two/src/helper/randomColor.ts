// Random background color for category
export const generateColor = () => {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }

  return color;
};
