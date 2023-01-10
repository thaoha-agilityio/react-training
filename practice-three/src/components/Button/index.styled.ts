import styled from "styled-components";

interface StyledButtonProps {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
}

export const BaseButton = styled.button<StyledButtonProps>`
  font-family: "DM_Sans";
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;

  color: var(
    ${(props) => {
      if (props.variant === "primary") {
        return "--color-primary-50";
      }

      return `--color-secondary`;
    }}
  );

  background-color: var(
    ${(props) => {
      if (props.variant === "primary") {
        return "--transparent";
      }

      return `--color-secondary-300`;
    }}
  );

  font-size: var(
    ${(props) => {
      switch (props.size) {
        case "medium":
          return "--fs-medium";
        case "large":
          return "--fs-large";
        default:
          return "--fs-small";
      }
    }}
  );

  width: (
    ${(props) => {
      switch (props.size) {
        case "medium":
          return "45px";
        case "large":
          return "77px";
        default:
          return "auto";
      }
    }}
  );
`;

export const CircleButton = styled(BaseButton)`
  border-radius: 50%;
  text-align: center;
  padding-top: 4px;
  border: 1px solid #e3e6eb;
  width: 40px;
  height: 40px;
`;
