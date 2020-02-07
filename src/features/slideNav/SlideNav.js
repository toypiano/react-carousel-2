import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../store/store";
import { actionTypes } from "../../store/actions";

const StyledSlideNavItem = styled.li`
  button {
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: transparent;
    margin: 5px;
    padding: 0;
    border: none;
    transition: transform 0.3s ease-in-out;
    &:focus,
    &.active {
      outline: none;
      transform: scale(0.8);
      filter: brightness(1.2) opacity(1);
    }
    &:active {
      transform: scale(1.1);
      filter: opacity(1) brightness(1.2) drop-shadow(0 0 3px white);
    }
    span {
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background: hsla(0, 100%, 100%, 0.7);
      filter: drop-shadow(0px 0px 5px black);
    }
  }
`;

function SlideNavItem(props) {
  return (
    <StyledSlideNavItem>
      <button
        className={props.isActive ? "active" : null}
        onClick={props.clicked}
      >
        <span />
      </button>
    </StyledSlideNavItem>
  );
}

const StyledSlideNav = styled.div`
  position: absolute;
  bottom: 36px;
  left: 20px;
  display: flex;
  list-style-type: none;
`;

const SlideNav = props => {
  const { state, dispatch } = useContext(StateContext);
  const slideNavItems = state.slides.map((slide, i) => {
    return (
      <SlideNavItem
        isActive={i === state.currentIndex}
        clicked={() =>
          dispatch({ type: actionTypes.GOTO, payload: i })
        }
      />
    );
  });
  return <StyledSlideNav>{slideNavItems}</StyledSlideNav>;
};

export default SlideNav;
