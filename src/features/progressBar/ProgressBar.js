import React, { useContext } from "react";
import styled from "styled-components";
import useProgress from "./useProgress";
import { StateContext } from "../../store/store";

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

// TODO: fix glitches with continuous clicks
// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
export default props => {
  const { state } = useContext(StateContext);
  const progress = useProgress();
  return (
    <StyledProgressBar>
      {state.isPlaying && (
        <div style={{ width: `${progress * 100}%` }} />
      )}
    </StyledProgressBar>
  );
};
