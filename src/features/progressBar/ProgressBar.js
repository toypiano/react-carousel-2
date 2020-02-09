import React from "react";

import styled from "styled-components";
import useProgress from "./useProgress";

const StyledProgressBar = styled.div`
  position: absolute;
  bottom: 22px;
  left: 0;
  right: 0;
  & > div {
    height: 3px;
    background-color: hsla(0, 100%, 100%, 0.3);
  }
`;

export default ({ isAnimating, duration }) => {
  const progress = useProgress(isAnimating, duration);
  return (
    <StyledProgressBar>
      <div style={{ width: `${progress * 100}%` }} />
    </StyledProgressBar>
  );
};
