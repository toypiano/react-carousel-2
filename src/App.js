import React from "react";
import styled from "styled-components";
import { StateProvider } from "./store/store";

import vars from "./common/vars";

import Slides from "./features/slides/Slides";
import SlideNav from "./features/slideNav/SlideNav";
import Controls from "./features/controls/Controls";
import ProgressBar from "./features/progressBar/ProgressBar";

const StyledCarousel = styled.section`
  @media (min-width: ${vars.xl}) {
    position: relative;
    max-width: 990px;
    height: 100vh;
    margin: auto;
    display: flex;
  }
`;
function Carousel(props) {
  return <StyledCarousel {...props} />;
}

function App() {
  return (
    <StateProvider>
      <Carousel>
        <Slides />
        <SlideNav />
        <Controls />
        <ProgressBar />
      </Carousel>
    </StateProvider>
  );
}

export default App;
