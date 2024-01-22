/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

function calcRoundingRight(value) {
  const MAXROUNDING = 4;
  const THRESHOLD = 98;

  const val = Math.max(
    0,
    (MAXROUNDING * (value - THRESHOLD)) / (100 - THRESHOLD)
  );
  return `${val}px`;
}

const STYLES = {
  small: { "--height": "8px", "--radius": "4px" },
  medium: { "--height": "12px", "--radius": "4px" },
  large: { "--height": "24px", "--padding": "4px", "--radius": "8px" },
};

const ProgressBar = ({ value, size }) => {
  return (
    <OuterBar
      role="progressbar"
      aria-valuenow={value}
      aria-valuetext={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={STYLES[size]}
      max="100"
      value={value}
    >
      <InnerBar
        style={{
          "--rounding-right": calcRoundingRight(value),
          "--width": `${value}%`,
        }}
      ></InnerBar>
    </OuterBar>
  );
};

const OuterBar = styled.div`
  appearance: none;
  -webkit-appearance: none;

  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  overflow: hidden;
`;

const InnerBar = styled.div`
  border-radius: 4px var(--rounding-right) var(--rounding-right) 4px;
  width: var(--width);
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
