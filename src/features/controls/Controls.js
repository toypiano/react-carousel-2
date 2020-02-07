import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../store/store";
import { actionTypes } from "../../store/actions";

import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward
} from "react-icons/fa";

const IconButton = styled.button`
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  outline: none;
  border: none;
  color: hsla(0, 100%, 100%, 0.75);
  &:active {
    transform: scale(1.1);
    filter: opacity(1) brightness(1.1)
      drop-shadow(0 0 3px hsla(0, 100%, 100%, 0.2));
  }
`;

const StyledControls = styled.div`
  position: absolute;
  right: 20px;
  bottom: 50px;
  display: flex;
  justify-content: center;
`;

function SpaceGif({ width }) {
  return <div style={{ display: "inline-block", width }} />;
}

const Controls = props => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <StyledControls>
      {state.isPlaying ? (
        <IconButton>
          <FaPause />
        </IconButton>
      ) : (
        <IconButton>
          <FaPlay />
        </IconButton>
      )}
      <SpaceGif width="10px" />
      <IconButton
        onClick={() => dispatch({ type: actionTypes.PREV })}
      >
        <FaBackward />
      </IconButton>
      <IconButton
        onClick={() => dispatch({ type: actionTypes.NEXT })}
      >
        <FaForward />
      </IconButton>
    </StyledControls>
  );
};

export default Controls;
