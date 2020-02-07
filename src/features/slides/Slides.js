import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../store/store";

const StyledSlide = styled.li`
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (min-width: $xl) {
    background-size: 100%;
  }
  list-style-type: none;
  transition: opacity 200ms ease;
  &[aria-hidden="true"] {
    opacity: 0;
    transition-delay: 200ms;
    z-index: -1;
  }
  & div.SlideContent {
    background: rgba(250, 250, 250, 0.5);
    margin: 20px;
    padding: 10px 40px;
    display: inline-block;
    box-shadow: 3px 3px 5px hsla(0, 0%, 0%, 0.2);
    h2 {
      font-size: 2rem;
    }
  }
`;

function Slide(props) {
  return (
    <StyledSlide {...props} aria-hidden={!props.isCurrent}>
      <div className="SlideContent">
        <h2 id={props.id}>{props.title}</h2>
        {props.children}
      </div>
    </StyledSlide>
  );
}

const Slides = props => {
  const { state } = useContext(StateContext);
  const slides = state.slides.map((slide, i) => {
    return (
      <Slide
        key={slide.id}
        id={`image-${i}`}
        src={slide.src}
        title={slide.title}
        isCurrent={i === state.currentIndex}
      >
        <p>{slide.content}</p>
      </Slide>
    );
  });
  return <ul>{slides}</ul>;
};

export default Slides;
