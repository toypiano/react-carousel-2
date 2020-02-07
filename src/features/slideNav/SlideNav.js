import React from "react";
import styled from "styled-components";

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
    span {
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background: hsla(0, 100%, 100%, 0.53);
    }
  }
`;

function SlideNavItem(props) {
  return (
    <StyledSlideNavItem>
      <button>
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

export default props => {
  const slideNavItems = props.slides.map((slide, i) => {
    return <SlideNavItem />;
  });
  return <StyledSlideNav>{slideNavItems}</StyledSlideNav>;
};
