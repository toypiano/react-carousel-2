import React from "react";
import Slides from "./features/slides/Slides";
import SlideNav from "./features/slideNav/SlideNav";
import Controls from "./features/controls/Controls";
import ProgressBar from "./features/progressBar/ProgressBar";

function Carousel(props) {
  return <section className="Carousel" {...props} />;
}

function App() {
  return (
    <Carousel>
      <Slides />
      <SlideNav />
      <Controls />
      <ProgressBar />
    </Carousel>
  );
}

export default App;

// TODO: fix Slides layering
