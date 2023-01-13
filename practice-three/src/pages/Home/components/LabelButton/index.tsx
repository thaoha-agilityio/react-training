import { LabelButtonStyled } from "./index.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const LabelButton = ({ text, ...rest }: IProps): React.ReactElement => (
  <LabelButtonStyled {...rest}>{text}</LabelButtonStyled>
);

export default LabelButton;
