import React from "react";
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward
} from "react-icons/fa";

export default props => {
  return (
    <div>
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
    </div>
  );
};

function IconButton(props) {
  return <button {...props} />;
}

function SpaceGif({ width }) {
  return <div style={{ display: "inline-block", width }} />;
}
