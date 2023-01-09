import styled from "styled-components";

interface StyledButtonProps {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  styles: "normal" | "circle";
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: var(--color-secondary);
  padding: 5px 10px;

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
