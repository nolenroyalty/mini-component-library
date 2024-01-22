import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const hiddenRef = React.useRef();
  const displayedValue = getDisplayedValue(value, children);
  console.log(`DISPLAYED: ${displayedValue}`);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (!hiddenRef.current) {
      return 0;
    }
    hiddenRef.current.style.display = "inline-block";
    hiddenRef.current.textContent = displayedValue;
    const curWidth = hiddenRef.current.offsetWidth;
    hiddenRef.current.style.display = "none";
    setWidth(curWidth);
  }, [displayedValue]);

  console.log(width);

  return (
    <>
      <FooSpan ref={hiddenRef}></FooSpan>
      <Wrapper width={width} value={value} onChange={onChange}>
        {children}
      </Wrapper>
    </>
  );
};

const FooSpan = styled.span`
  display: none;
  color: red;
`;

const Wrapper = styled.select`
  border-radius: 4px;
  padding: 12px 52px 12px 16px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  width: ${(p) => p.width + 52 + 16}px;

  appearance: none;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${COLORS.gray700}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%;
  background-size: 1.5em;
  font-weight: 400;
  font: 16px "Roboto", sans-serif;
  border: none;

  &:hover {
    color: ${COLORS.black};
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${COLORS.black}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  }
`;

export default Select;
