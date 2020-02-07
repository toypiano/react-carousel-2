import React from "react";
import styled from "styled-components";
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
  color: hsla(0, 100%, 100%, 0.5);
`;

const StyledControls = styled.div`
  position: absolute;
  right: 20px;
  bottom: 36px;
  display: flex;
  justify-content: center;
`;

export default props => {
  return (
    <StyledControls>
      {props.isPlaying ? (
        <IconButton>
          <FaPause />
        </IconButton>
      ) : (
        <IconButton>
          <FaPlay />
        </IconButton>
      )}
      <SpaceGif width="10px" />
      <IconButton>
        <FaBackward />
      </IconButton>
      <IconButton>
        <FaForward />
      </IconButton>
    </StyledControls>
  );
};

function SpaceGif({ width }) {
  return <div style={{ display: "inline-block", width }} />;
}
