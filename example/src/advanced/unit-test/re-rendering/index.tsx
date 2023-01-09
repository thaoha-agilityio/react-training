interface IProps {
  name?: string;
}

export const Hello = ({ name }: IProps) => {
  if (name) {
    return <h1>Hello, {name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
};
