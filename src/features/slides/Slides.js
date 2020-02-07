import React from "react";
import styled from "styled-components";

const StyledSlide = styled(Slide)`
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

export default props => {
  const slides = props.imgs.map((img, i) => {
    return (
      <StyledSlide
        key={img.id}
        id={`image-${i}`}
        src={img.src}
        title={img.title}
        isCurrent={i === 0}
      >
        <p>{img.content}</p>
      </StyledSlide>
    );
  });
  return <ul>{slides}</ul>;
};

function Slide(props) {
  return (
    <li {...props}>
      <div className="SlideContent">
        <h2 id={props.id}>{props.title}</h2>
        {props.children}
      </div>
    </li>
  );
}
