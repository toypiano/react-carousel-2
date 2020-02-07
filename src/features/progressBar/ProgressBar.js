import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  & > div {
    height: 20px;
    background-color: hsla(0, 100%, 100%, 0.5);
  }
`;

export default props => {
  const progress = 0.7;
  return (
    <StyledProgressBar>
      <div style={{ width: `${progress * 100}%` }} />
    </StyledProgressBar>
  );
};
