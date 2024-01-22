import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, ...rest }) => {
  let iconSize = size === "small" ? 16 : 24;
  let height = size === "small" ? "1.5rem" : "2rem";
  let fontSize = size === "small" ? 14 / 16 + "rem" : 18 / 16 + "rem";
  let leftPadding = iconSize * 1.5;
  let strokeWidth = size === "small" ? 1 : 2;
  let borderSize = size === "small" ? 1 : 2;
  return (
    <Wrapper
      style={{
        "--border-size": `${borderSize}px`,
        "--width": `${width}px`,
      }}
      type="search"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": `${iconSize}px` }}>
        <Icon id={icon} strokeWidth={strokeWidth} size={iconSize} />{" "}
      </IconWrapper>
      <Input
        style={{
          "--left-padding": leftPadding + "px",
          "--height": height,
          "--font-size": fontSize,
        }}
        {...rest}
      />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);

  color: inherit;
  pointer-events: none;
`;

const Input = styled.input`
  display: inline;
  border: none;
  padding: 4px 0 4px var(--left-padding);
  height: var(--height);
  width: 100%;

  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--font-size);

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 4px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: var(--width);

  color: ${COLORS.gray700};
  border-bottom: var(--border-size) solid currentColor;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
